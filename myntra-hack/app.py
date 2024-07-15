from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

swipe_data = {'liked': [], 'disliked': []}

@app.route('/swipe', methods=['POST'])
def swipe():
    data = request.json
    swipe_data['liked'].extend(data.get('liked', []))
    swipe_data['disliked'].extend(data.get('disliked', []))
    return jsonify(success=True)

@app.route('/stats', methods=['GET'])
def stats():
    try:
        liked_df = pd.DataFrame(swipe_data['liked'])
        disliked_df = pd.DataFrame(swipe_data['disliked'])

        # Counting liked items
        liked_counts = liked_df['text'].value_counts().reset_index()
        liked_counts.columns = ['text', 'count']
        liked_counts = liked_counts.to_dict(orient='records')

        # Counting disliked items
        disliked_counts = disliked_df['text'].value_counts().reset_index()
        disliked_counts.columns = ['text', 'count']
        disliked_counts = disliked_counts.to_dict(orient='records')

        # Gathering liked tags
        liked_tags = liked_df[['text', 'tags']].to_dict(orient='records')

        # Gathering disliked tags
        disliked_tags = disliked_df[['text', 'tags']].to_dict(orient='records')

        return jsonify({
            'liked_counts': liked_counts,
            'disliked_counts': disliked_counts,
            'liked_tags': liked_tags,
            'disliked_tags': disliked_tags
        })

    except Exception as e:
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)
