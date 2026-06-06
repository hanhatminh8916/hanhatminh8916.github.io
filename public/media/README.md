# Thư mục media

Đặt file ảnh và video của bạn vào đây theo đúng tên đã được khai báo trong
`src/routes/index.tsx` (mục `PROJECTS`). Bạn chỉ cần ghi đè file cùng tên,
không phải sửa code.

Cấu trúc:

```
public/media/
├── robocar/
│   ├── demo-01.mp4   ← Video demo 1
│   └── demo-02.mp4   ← Video demo 2
├── helmet/
│   ├── demo-01.mp4
│   └── demo-02.mp4
└── dqn/
    ├── demo-01.mp4   ← Đặt file DQN_Robot.mp4 của bạn vào đây và đổi tên
    └── demo-02.mp4
```

Đường dẫn trong code đã trỏ sẵn tới `/media/<project>/<file>` nên chỉ cần
copy file đúng tên vào thư mục tương ứng là website sẽ tự hiển thị.

Nếu muốn đổi ảnh, có thể thay file trong `src/assets/` hoặc trỏ ảnh sang
`/media/...` rồi sửa import tương ứng.
