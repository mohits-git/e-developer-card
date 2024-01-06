## Backend for storing and accessing Cards from DB

### API

#### Get Cards
- localhost:3000/api/cards
    - get all the cards data as an array of objects
    - ```js
        [{ 
            name: String,
            description: String,
            interests: String,
            giturl: String,
            socials: [
                {
                    social: String,
                    url: String
                }
            ]
        }]
        ```

#### Post Card
- localhost:3000/api/card
    - post a card accord to the schema defiend above
    - the card data should be provide in a card property in req.body object
    - ```js
        {
            card: {
                name: String,
                description: String,
                interests: String,
                giturl: String,
                socials: [
                    {
                        social: String,
                        url: String
                    }
                ]
            }
        }
        ```
