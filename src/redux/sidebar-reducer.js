let initialState = {
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
}
const sidebarReducer = (state = initialState, action) => {
   return state;
}

export default sidebarReducer