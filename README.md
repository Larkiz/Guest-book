## Как установить

`git clone https://github.com/Larkiz/Guest-book.git`

### 1. Сервер

В терминале каталога сервера прописать `npm install`

Запустить:

`npm start`

Маршруты Api:

#### {host}/:

WebSocket
Message:

```
{
  text: string,
  star:{
    kitchen: int,
    service: int,
    interior: int
  }
}
```

#### {host}/comments:

`method: GET`

### 2. Клиент

В терминале каталога клиента прописать `npm install`

Запустить:

`npm start`
