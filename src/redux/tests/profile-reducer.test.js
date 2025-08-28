import profileReducer, { addPostActionCreator } from "../profile-reducer"

test.only('new post should be added', () => {

   let state = {
      PostsData: [
         {
            id: 1,
            text: "Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Имени, дорогу продолжил языкового вершину страна все подзаголовок щеке его деревни агентство! Запятых что моей обеспечивает эта знаках, ты строчка! Жизни, за которой пустился жаренные свое решила то коварных коварный использовало переписывается маленький журчит текстов оксмокс но подпоясал вершину взгляд.",
            avatar: "https://avatars.mds.yandex.net/i?id=7a0a91c5a0d3faf537c1360d8cb0995a_l-7999331-images-thumbs&n=13",
            likesCount: 202,
         },
         {
            id: 2,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur iusto voluptas corrupti esse odit",
            avatar: "https://avatars.mds.yandex.net/i?id=f1322a00cdae16fd4cb790fdfa87a3bb_l-5905988-images-thumbs&n=13",
            likesCount: 3,
         },
         {
            id: 3,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur iusto voluptas corrupti esse odit",
            avatar: "https://avatars.mds.yandex.net/i?id=f1322a00cdae16fd4cb790fdfa87a3bb_l-5905988-images-thumbs&n=13",
            likesCount: 3,
         }
      ],
   }

   let action = addPostActionCreator({ Post: "Test 228" })


   let newState = profileReducer(state, action)

   expect(newState.PostsData[3].id).toBe(3);
});

