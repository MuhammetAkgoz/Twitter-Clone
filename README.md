# Twitter Clone Uygulaması


## React JS

React bir JavaScript kütüphanesi olup web uygulamaları için hızlı ve interaktif kullanıcı arayüzleri oluşturmada kullanılır. Açık kaynak kodlu, bileşen bazlı ve front-end bir kütüphane olan **React**, sadece uygulamanın görünüm katmanından sorumludur. Proje React teknolojisi kullanılarak geliştirilmiştir. React'ın hooks yapısını da içermektedir.

<br/>

![image](https://user-images.githubusercontent.com/60561335/145529945-33f06f1c-ba47-4e25-b64c-d2749d9241c2.png)

<br/>

## Tailwind CSS

Taildwind CSS inline bir şekilde css yazabildiğiniz bir kütüphanedir. Özellikle kendi içindekiler dışında sizin tailwind sundukları dışında onu özelleştirebiliyor olmanız belkide en büyük artısı. Projemde Tailwind CSS kullandım ve hiç css yazmadım.

```
<div className="flex -ml-3">
   <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
      <ImageIcon className="w-5 h-5 text-primary-base" />
   </div>
   <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
      <GIFIcon className="w-5 h-5 text-primary-base" />
   </div>
   <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
      <EmojiIcon className="w-5 h-5 text-primary-base" />
   </div>
   <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
       <PopulerIcon className="w-5 h-5 text-primary-base" />
   </div>
   <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
       <ScheduleIcon className="w-5 h-5 text-primary-base" />
   </div>
 </div>
 ```
 
Tailwind CSS kütüphanesine [bu linkten](https://tailwindcss.com/) ulaşabilirsiniz.

## Firebase/Firestore

Firebase; uygulama yönetimi, kullanım takip, depolama, bildirim iletme gibi temel işlemleri sunucu taraflı kod yazmaya ihtiyaç duymadan halleder. Realtime Database, Notification, Remote Config gibi özelliklerle birlikte her uygulama için ayrı ayrı ulaşım imkanı sağlıyor. Proje içersinde tweet atma ve ekranda atılan tweetleri gösterme işlemlerini firebase üzerinden yapmaktayım. 

Firebase kullanmak için [**firebase config**](https://firebase.google.com/docs/web/setup) dosyası oluşturulmalıdır.

```
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCiFldky6HwJItkalWPIbRf8Zv8Ex8q9OQ",
  authDomain: "twitter---clone-e9b92.firebaseapp.com",
  projectId: "twitter---clone-e9b92",
  storageBucket: "twitter---clone-e9b92.appspot.com",
  messagingSenderId: "763910910438",
  appId: "1:763910910438:web:d1bafdc4a9ddbac8556627",
  measurementId: "G-D0ZGD51XEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db;
```

