const apiKey = '4KaY76xmiM3MxFdZ7Zjzzui1QH_m84osKK87_UFmYB6HdW5E5lBQUikTmubxmsAI_T7Xekn3M9lSVKEerLiVqDPlWn8f3PZvJ4MvHUiDk9fHgL8deORrVbWTY2HkWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers : {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json().then(jsonResponse => {
          if(jsonResponse.businesses) {
            return jsonResponse.businesses.map( business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories,
                rating: business.rating,
                reviewCount: business.review_count
              }
            });
          }
        });
      });
  }
};

export default Yelp;
