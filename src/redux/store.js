import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
   _state: {
      DialogsPage: {
         dialogsData: [
            { id: 1, name: "Shura Shurin", avatar: "https://steamuserimages-a.akamaihd.net/ugc/2375172084993007344/F290FD8EF08EDF7DCF276F6A859B00B6937F2CAD/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" },
            { id: 2, name: "Andrey Chikatilo", avatar: "https://images.steamusercontent.com/ugc/2036236169010009458/2F6C6B2EE802E3B232679EDA7A61175646B34864/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" },
            { id: 3, name: "Adolf Hitler", avatar: "https://avatars.mds.yandex.net/i?id=8272b6b2f61650d784d52540de3eedc4_l-9222271-images-thumbs&n=13" },
            { id: 4, name: "Alexaner Makedonsky", avatar: "https://avatars.mds.yandex.net/get-yapic/25358/Iwt8Wapn2LhRO9uQzcQVKyL7jDM-1/orig" },
         ],
         messagesData: [
            {
               id: 1,
               message: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Живет страну имеет безорфографичный грамматики дал пунктуация, себя если раз до большого залетают деревни выйти большой первую свою текстами предупреждал?",
            },
            {
               id: 2,
               message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptate provident nostrum soluta officiis. Laboriosam neque iusto ducimus ipsam nesciunt!"
            },
            {
               id: 3,
               message: "Lorem ipsum dolor sit amet."
            },
         ],
         newMessageBody: "",
      },
      ProfilePage: {
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
            }
         ],
         NewPostText: ""
      },
      Sidebar: {
         FriendsOnline: [
            {
               id: 1,
               name: "Vladimir Putin",
               avatar: "https://s.yimg.com/ny/api/res/1.2/yJtWizIEhrsDmb8v7aajzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/the-holland-sentinel/49b8d4f3d3ac3200d6561a86e0975de0",
            },
            {
               id: 2,
               name: "Oleg Tinkov",
               avatar: "https://avatars.mds.yandex.net/i?id=b26b28e4d22050bf836b188db3b350d4_l-13480663-images-thumbs&n=13"
            },
            {
               id: 3,
               name: "Donald Trump",
               avatar: "https://twt-thumbs.washtimes.com/media/image/2023/04/04/Trump_Indictment_96778_c0-74-1787-1116_s1200x700.jpg?666bc889f19e332d1cfb229be8bf782aea559d13",
            },
            {
               id: 4,
               name: "Касым-Жомарт Кемелевич Токаев",
               avatar: "https://avatars.mds.yandex.net/i?id=ec5062024876262c811025f04993b814_l-7553521-images-thumbs&n=13",
            }
         ]
      },
      UsersPage: {

      }
   },

   _rerenderEntireTree() { },

   subscribe(observer) {
      this._rerenderEntireTree = observer
   },
   getState() {
      return this._state
   },

   dispatch(action) {
      this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
      this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
      this._state.Sidebar = sidebarReducer(this._state.Sidebar, action)
      this._rerenderEntireTree(this._state)
   }

}
export default store;
