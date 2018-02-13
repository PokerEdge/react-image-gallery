import React from 'react';

const Coffee = props => {

  // let serverID = '4764';
  // let photoID = '26300130668';
  // let secret = 'b3b1ee507f';

  /*
  let farm = data.photos.photo.farm;
  let altText = data.photos.photo.title;
  */

  let coffeeData = { "photos": { "page": 1, "pages": "92084", "perpage": 12, "total": "1105004",
    "photo": [
      { "id": "39518552314", "owner": "149805389@N02", "secret": "dd4caf1b4f", "server": "4758", "farm": 5, "title": "Washington DC coffee #washingtondc #sony7r11 #sony #coffee", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "28449482309", "owner": "39572930@N08", "secret": "3d99d612d2", "server": "4656", "farm": 5, "title": "Smak wspólnych chwil - ciastka pełne miłości na Walentynki", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26355774618", "owner": "39572930@N08", "secret": "e7508682b7", "server": "4608", "farm": 5, "title": "Smak wspólnych chwil - ciastka pełne miłości na Walentynki", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "40227795351", "owner": "155357702@N05", "secret": "04af017965", "server": "4603", "farm": 5, "title": "نوم على كرسي في المقهى - Sleep in a chair in the coffee shop", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "39329990535", "owner": "84573694@N05", "secret": "d8d9bb2104", "server": "4716", "farm": 5, "title": "20180203-Milanese Street Scene-3551.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "39516543904", "owner": "86581473@N00", "secret": "97a7f1de29", "server": "4612", "farm": 5, "title": "\"Good to the last drop\"", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "39516461804", "owner": "39572930@N08", "secret": "d2f926c9ba", "server": "4665", "farm": 5, "title": "Smak wspólnych chwil - ciastka pełne miłości na Walentynki", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "40227075991", "owner": "33414580@N00", "secret": "7f3aa1228a", "server": "4767", "farm": 5, "title": "drying_coffee", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "40194090462", "owner": "33414580@N00", "secret": "5a58c19f34", "server": "4701", "farm": 5, "title": "me_with_coffee", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26354186328", "owner": "33414580@N00", "secret": "b7373a489c", "server": "4656", "farm": 5, "title": "bee_flower", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "28447258309", "owner": "33414580@N00", "secret": "b9fe50f4f7", "server": "4610", "farm": 5, "title": "coffee_on_tree", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "28447116979", "owner": "33414580@N00", "secret": "ed2575fe86", "server": "4761", "farm": 5, "title": "volleyball_court_with_coffee", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
    ] }, "stat": "ok" };

  let url = [
    `https://farm${coffeeData.photos.photo[0].farm}.staticflickr.com/${coffeeData.photos.photo[0].server}/${coffeeData.photos.photo[0].id}_${coffeeData.photos.photo[0].secret}.jpg} alt="${coffeeData.photos.photo[0].title}"`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[1].server}/${coffeeData.photos.photo[1].id}_${coffeeData.photos.photo[1].secret}.jpg`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[2].server}/${coffeeData.photos.photo[2].id}_${coffeeData.photos.photo[2].secret}.jpg`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[3].server}/${coffeeData.photos.photo[3].id}_${coffeeData.photos.photo[3].secret}.jpg`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[4].server}/${coffeeData.photos.photo[4].id}_${coffeeData.photos.photo[4].secret}.jpg`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[5].server}/${coffeeData.photos.photo[5].id}_${coffeeData.photos.photo[5].secret}.jpg`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[6].server}/${coffeeData.photos.photo[6].id}_${coffeeData.photos.photo[6].secret}.jpg`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[7].server}/${coffeeData.photos.photo[7].id}_${coffeeData.photos.photo[7].secret}.jpg`,
    `https://farm5.staticflickr.com/${coffeeData.photos.photo[8].server}/${coffeeData.photos.photo[8].id}_${coffeeData.photos.photo[8].secret}.jpg`,
  ];

  if (url.length > 0){

  }

  /* Map over rate limited API fetch for particular string entered */
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <li><img src={url[0]} alt="" /></li>
        <li><img src={url[1]} alt="" /></li>
        <li><img src={url[2]} alt="" /></li>
        <li><img src={url[3]} alt="" /></li>
        <li><img src={url[4]} alt="" /></li>
        <li><img src={url[5]} alt="" /></li>
        <li><img src={url[6]} alt="" /></li>
        <li><img src={url[7]} alt="" /></li>
        <li><img src={url[8]} alt="" /></li>
      </ul>
    </div>
    /*
    <li><img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" /></li>
    */
  );
}

export default Coffee;
