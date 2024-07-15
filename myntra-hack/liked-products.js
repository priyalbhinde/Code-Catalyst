document.addEventListener("DOMContentLoaded", () => {
  const likedProductsContainer = document.getElementById(
    "likedProductsContainer"
  );

  // Sample cardsData array
  const cardsData = [
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17186110/2022/2/17/232b7f76-6647-411a-a28e-2811bfbdb28a1645108715599WideT-shirt1.jpg",
      text: "Oversized Tee",
      link: "https://www.myntra.com/tshirts/hm/hm-women-white-wide-t-shirt/17186110/buy",
      tags: {
        color: "white",
        type: "comfy",
        category: "upper wear",
        brand: "H&M",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26833804/2024/1/8/f3a0b1c2-bcd7-45b5-97c9-f50a7a7a0c871704725256918HMCroppedRibbedT-shirt2.jpg",
      text: "Crop Top",
      link: "https://www.myntra.com/tshirts/h%26m/hm-cropped-ribbed-t-shirt/26833804/buy",
      tags: {
        color: "white",
        type: "crop",
        category: "upper wear",
        brand: "Mango",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30064807/2024/6/28/13856081-a3e2-4d18-8ed3-334cb4fe2f581719580477766HMRibbedT-shirt1.jpg",
      text: "Polo T-Shirt",
      link: "https://www.myntra.com/tshirts/h%26m/-hm-ribbed-t-shirt-/30064807/buy",
      tags: {
        color: "navy-blue",
        type: "polo",
        category: "upper wear",
        brand: "Aeropostale",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27726090/2024/4/5/18257415-4f1b-4733-add4-5a6e1a6d3ecc1712302435416HMMenSlimFitRibbedVestT-Shirts1.jpg",
      text: "Black T-shirt",
      link: "https://www.myntra.com/tshirts/h%26m/hm-men-slim-fit-ribbed-vest-top/27726090/buy",
      tags: {
        color: "black",
        type: "slim fit",
        category: "upper wear",
        brand: "H&M",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30190956/2024/JULY/11/NTmcGBHt_531984de23cd4a8fb2f9114bab926186.jpg",
      text: "Crop Top",
      link: "https://www.myntra.com/tops/h%26m/-hm-women-overlock-detail-ribbed-top/30190956/buy",
      tags: {
        color: "white",
        type: "crop",
        category: "upper wear",
        brand: "H&M",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30154761/2024/7/9/f5a1ae52-f3e0-4c6a-b63d-b1f53641a35e1720463749562Overlock-detailcrinkledtop1.jpg",
      text: "Crinkled Top",
      link: "https://www.myntra.com/tops/h%26m/-hm-overlock-detail-crinkled-top-/30154761/buy",
      tags: {
        color: "blue",
        type: "crinkled",
        category: "upper wear",
        brand: "H&M",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19456430/2022/9/21/8c22ac39-a9f8-4a9a-b2d3-50beb2d170751663754210744-MANGO-Violet-Solid-Mandarin-Collar-Top-9731663754210398-1.jpg",
      text: "Crop Top",
      link: "https://www.myntra.com/tops/mango/mango-violet-solid-mandarin-collar-top/19456430/buy",
      tags: {
        color: "purple",
        type: "mandarin collar",
        category: "upper wear",
        brand: "Mango",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22302978/2023/9/8/4916118f-c347-407c-a591-8f89fe40ca3f1694165242917MANGOSolidSeamDetailTop1.jpg",
      text: "Seam Detail Top",
      link: "https://www.myntra.com/tops/mango/mango-solid-seam-detail-top/22302978/buy",
      tags: {
        color: "black",
        type: "seam-detail",
        category: "upper wear",
        brand: "Mango",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24518314/2023/9/1/9485fbad-7c0d-4a3a-8795-b8c7bf7e58af1693549379478-MANGO-Pure-Cotton-Wrap-Top-2851693549379158-1.jpg",
      text: "Wrap Top",
      link: "https://www.myntra.com/tops/mango/mango-pure-cotton-wrap-top/24518314/buy",
      tags: {
        color: "coral-orange",
        type: "wrap",
        category: "upper wear",
        brand: "Mango",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25256842/2023/10/11/81f2b7dc-d48e-4616-ac73-d8f34705a0e41696997396837MANGOWomenEmbellishedTrousersJumpsuitMANGOWomenSweatersMANGO1.jpg",
      text: "Strape-less Top",
      link: "https://www.myntra.com/tops/mango/mango-pure-cotton-strapless-denim-top/25256842/buy",
      tags: {
        color: "white",
        type: "strape-less",
        category: "upper wear",
        brand: "Mango",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25377280/2023/10/18/052db118-34fc-4558-86a0-8be6f7865a441697608026298BlazersMANGOWomenJeansMANGOWomenTrousersMANGOWomenJeansMANGO1.jpg",
      text: "Printed Top",
      link: "https://www.myntra.com/tops/mango/mango-floral-print-tie-up-neck-puff-sleeve-shirt-style-top/25377280/buy",
      tags: {
        color: "black",
        type: "printed",
        category: "upper wear",
        brand: "Mango",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15495556/2021/9/16/5c324467-4551-45f9-8337-c131f97f9e551631777254543AMERICANEAGLEOUTFITTERSBlackFloralRegularTop1.jpg",
      text: "Regular Top",
      link: "https://www.myntra.com/tops/american+eagle+outfitters/american-eagle-outfitters-black--pink-regular-top/15495556/buy",
      tags: {
        color: "black",
        type: "floral",
        category: "upper wear",
        brand: "American Eagle",
      },
    },
    {
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28434994/2024/3/22/40bcc120-c201-469b-a732-944e9120e6f21711085143320AMERICANEAGLEOUTFITTERSStripedTie-UpNeckCottonTop1.jpg",
      text: "Striped Tie-Up",
      link: "https://www.myntra.com/tops/american+eagle+outfitters/american-eagle-outfitters-striped-tie-up-neck-puff-sleeves-top/28434994/buy",
      tags: {
        color: "blue",
        type: "striped",
        category: "upper wear",
        brand: "American Eagle",
      },
    },
  ];

  // Function to fetch liked products data and display
  const fetchLikedProducts = () => {
    fetch("http://127.0.0.1:5000/stats")
      .then((response) => response.json())
      .then((data) => {
        const likedProducts = data.liked_tags.map((item) => ({
          text: item.text,
          tags: item.tags,
          link: item.link,
        }));

        const addedProducts = new Set(); // To track added products

        likedProducts.forEach((product) => {
          // Find the corresponding cardData for the product
          const cardData = cardsData.find((card) => card.text === product.text);

          if (cardData && !addedProducts.has(product.text)) {
            addedProducts.add(product.text);

            const productCard = document.createElement("div");
            productCard.className = "product";
            productCard.innerHTML = `
              <div class="product-image" style="background-image: url(${cardData.image})"></div>
              <div class="product-content">
                <div class="product-text">${product.text}</div>
                <button class="product-btn" onclick="window.open('${cardData.link}', '_blank')">Go to Product</button>
              </div>`;

            likedProductsContainer.appendChild(productCard);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching liked products:", error);
      });
  };

  fetchLikedProducts();
});
