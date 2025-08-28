const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
   dialogsData: [
      { id: 1, name: "Shura Shurin", avatar: "https://steamuserimages-a.akamaihd.net/ugc/2375172084993007344/F290FD8EF08EDF7DCF276F6A859B00B6937F2CAD/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" },
      { id: 2, name: "Andrey Chikatilo", avatar: "https://images.steamusercontent.com/ugc/2036236169010009458/2F6C6B2EE802E3B232679EDA7A61175646B34864/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" },
      { id: 3, name: "Adolf Hitler", avatar: "https://avatars.mds.yandex.net/i?id=8272b6b2f61650d784d52540de3eedc4_l-9222271-images-thumbs&n=13" },
      { id: 4, name: "Alexaner Makedonsky", avatar: "https://avatars.mds.yandex.net/get-yapic/25358/Iwt8Wapn2LhRO9uQzcQVKyL7jDM-1/orig" },
      { id: 5, name: "Shura Shurin", avatar: "https://steamuserimages-a.akamaihd.net/ugc/2375172084993007344/F290FD8EF08EDF7DCF276F6A859B00B6937F2CAD/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" },
      { id: 6, name: "Andrey Chikatilo", avatar: "https://images.steamusercontent.com/ugc/2036236169010009458/2F6C6B2EE802E3B232679EDA7A61175646B34864/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" },
      { id: 7, name: "Adolf Hitler", avatar: "https://avatars.mds.yandex.net/i?id=8272b6b2f61650d784d52540de3eedc4_l-9222271-images-thumbs&n=13" },
      { id: 8, name: "Alexaner Makedonsky", avatar: "https://avatars.mds.yandex.net/get-yapic/25358/Iwt8Wapn2LhRO9uQzcQVKyL7jDM-1/orig" },
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
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {

      case SEND_MESSAGE:
         let newMessage = {
            id: 9,
            message: action.data.message,
         }
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
         }

      default:
         return state
   }
}

export let sendMessageActionCreator = (data) => ({ type: SEND_MESSAGE, data })

export default dialogsReducer