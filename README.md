🦴 auto-skeletonizer

Zero-config skeleton loader generator for React, Next.js, and Vite— automatically creates skeleton UIs from your real components.

✨ Features

⚡ Zero-config DOM-based skeleton generation

🧠 Automatically detects text, images, buttons, inputs, etc.

⚛️ Works with React, Next.js, Vite, CRA

🎨 Lightweight (2KB), no CSS frameworks required

🔄 Toggle loading state easily

📦 Installation
```

npm install auto-skeletonizer

```


or

```

yarn add auto-skeletonizer

```
⚛️ React / Next.js Usage
```tsx
import { ReactSkeleton } from "auto-skeletonizer/react";

export default function ProfileCard({ loading }) {
  return (
    <ReactSkeleton loading={loading}>
      <div className="card">
        <img src="/avatar.png" />
        <h2>John Doe</h2>
        <p>Frontend Engineer</p>
        <button>Follow</button>
      </div>
    </ReactSkeleton>
  );
}
```


Prop	Type	Description
loading	boolean	Shows skeleton when true
children	ReactNode	Wrapped UI
🧠 How It Works

auto-skeletonizer scans your DOM structure and:

Converts text → gray text bars

Converts images → rectangular placeholders

Converts buttons → rounded skeleton blocks

Preserves layout spacing automatically

No manual skeleton layouts needed.

🎨 Styling (Optional)

Skeleton elements use CSS variables:

```
:root {
  --sk-bg: #e5e7eb;
  --sk-highlight: #f3f4f6;
  --sk-radius: 6px;
  --sk-animation-speed: 1.2s;
}
```
🛠 Framework Support
Framework	Support
React	✅
Next.js	✅
Vite	✅
Vue	🔜
Svelte	🔜
📄 License

MIT

❤️ Author

Built with love by Akhil P A

⭐ Contributing

PRs welcome!
Open issues for bugs, features, or improvements.

If you want, I can:
✅ Add badges
✅ Add screenshots/GIF
✅ Add CodeSandbox demo
✅ Add Vue adapter docs
✅ Add advanced API section

Just tell me 😎
