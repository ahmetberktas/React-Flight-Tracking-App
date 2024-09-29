# React Flight Tracking App

**React Flight Tracking App**, uçuşları izleyen ve bunları harita görünümü ile liste görünümünde gösteren bir web uygulamasıdır. Uygulama, durumu yönetmek için **Redux Toolkit** ve harici API'lardan veri almak için **Axios** kullanır. Harita entegrasyonu için **Leaflet** kütüphanesi tercih edilmiştir.

## Kullanılan Kütüphaneler

- **@reduxjs/toolkit**  
  Redux geliştirme süreçlerini basitleştiren, resmi olarak önerilen araç setidir. Redux mantığının oluşturulmasını kolaylaştırır ve `createSlice`, `createAsyncThunk` gibi araçlarla asenkron istekleri yönetmeyi sağlar.

- **react-redux**  
  React bileşenlerinin Redux store'u ile etkileşime girmesini sağlayan kütüphanedir. `useSelector` ve `useDispatch` gibi hook'lar aracılığıyla React bileşenlerinin Redux durumu ile kolayca çalışmasını sağlar.

- **axios**  
  Harici API'lara HTTP istekleri yapmak için kullanılan promise tabanlı bir kütüphanedir. Bu uygulamada, uçuş verilerini dinamik olarak almak için kullanılır. İsteklerin yönetimi ve cevapların işlenmesini basitleştirir.

- **leaflet**  
  Açık kaynaklı, interaktif haritalar oluşturmaya yarayan JavaScript kütüphanesidir. Uygulamada, uçuşların coğrafi konumlarının harita üzerinde görüntülenmesini sağlar.

- **react-leaflet**  
  Leaflet kütüphanesinin React ile entegrasyonunu sağlayan bir sarmalayıcıdır. Harita elemanlarını, işaretçileri ve diğer interaktif özellikleri yönetmek için React bileşenleri sunar.

- **react-paginate**  
  Uçuşların listelenmesinde sayfalama yapmak için kullanılan bir React bileşenidir. Büyük veri setlerinde kullanıcıların daha kolay gezinmesini sağlar.

---
