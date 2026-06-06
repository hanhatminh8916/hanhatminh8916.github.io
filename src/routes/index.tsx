import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Mail,
  MapPin,
  Phone,
  Cpu,
  Cog,
  Radio,
  BrainCircuit,
  Trophy,
  Image as ImageIcon,
} from "lucide-react";

import portrait from "@/assets/portrait.jpg";
import robocar1 from "@/assets/robocar-1.jpg";
import robocar2 from "@/assets/robocar-2.jpg";
import robocar3 from "@/assets/robocar-3.jpg";
import helmet1 from "@/assets/helmet-1.jpg";
import helmet2 from "@/assets/helmet-2.jpg";
import helmet3 from "@/assets/helmet-3.jpg";
import dqn1 from "@/assets/dqn-1.jpg";
import dqn2 from "@/assets/dqn-2.jpg";
import dqn3 from "@/assets/dqn-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nguyễn Đình Trường — AIoT & Robotics Engineer" },
      {
        name: "description",
        content:
          "Portfolio của Nguyễn Đình Trường — sinh viên Trí tuệ Nhân tạo tại VKU. Các dự án về Robotics, AIoT, Embedded Systems và Deep Reinforcement Learning.",
      },
      { property: "og:title", content: "Nguyễn Đình Trường — AIoT & Robotics Engineer" },
      {
        property: "og:description",
        content:
          "Sinh viên AI tại VKU. Giải Nhất RoboCar, Giải Nhì AIoT Smart Helmet. Tập trung vào Robotics và hệ thống thông minh thực tế.",
      },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ----------------------------- Navigation ----------------------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-portfolio flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
          Đình Trường<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">Giới thiệu</a>
          <a href="#projects" className="transition-colors hover:text-foreground">Dự án</a>
          <a href="#skills" className="transition-colors hover:text-foreground">Kỹ năng</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Liên hệ</a>
        </nav>
        <a
          href="/cv/Nguyen_Dinh_Truong.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
        >
          <Download className="h-4 w-4" />
          Tải CV
        </a>
      </div>
    </header>
  );
}

/* -------------------------------- Hero -------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-portfolio grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Sinh viên AI tại VKU
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Nguyễn Đình Trường
          </h1>
          <p className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">
            AIoT &amp; Robotics Engineer
          </p>
          <div id="about" className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Tôi là Nguyễn Đình Trường, sinh viên ngành Trí tuệ Nhân tạo tại VKU. Chương
              trình đào tạo giúp tôi hiểu cách máy tính học từ dữ liệu, nhận diện thông
              tin và đưa ra quyết định. Tuy nhiên, điều khiến tôi hứng thú hơn cả là ứng
              dụng những khả năng đó vào các hệ thống thực tế, nơi AI không chỉ tồn tại
              trong mô hình mà trở thành một phần của robot và thiết bị thông minh.
            </p>
            <p>
              Vì vậy, bên cạnh việc học trên giảng đường, tôi chủ động tìm hiểu về
              Embedded Systems, vi điều khiển và Robotics. Tôi đã tham gia các cuộc thi
              kỹ thuật, đạt Giải Nhất RoboCar và Giải Nhì AIoT Smart Helmet.
              Nền tảng AI của tôi được xây dựng từ học thuật, còn tư duy Robotics được
              rèn luyện thông qua quá trình trực tiếp thiết kế, thử nghiệm và hoàn thiện
              sản phẩm.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Xem dự án <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Nguyen-Dinh-Truong"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-secondary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="/cv/Nguyen_Dinh_Truong.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Tải CV
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="reveal">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary" />
            <img
              src={portrait}
              alt="Nguyễn Đình Trường — chân dung"
              width={896}
              height={1152}
              className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-sm"
            />
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Đà Nẵng, Việt Nam
              </div>
              <div className="text-xs font-semibold tracking-wider text-muted-foreground">
                AI • ROBOTICS • EMBEDDED SYSTEMS
              </div>
            </div>
          </div>

          {/* Hero mini stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <MiniStat top="3+" label="Dự án AIoT/Robotics" />
            <MiniStat top="🥇" label="Giải Nhất RoboCar" />
            <MiniStat top="🥈" label="Giải Nhì AIoT Helmet" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ top, label }: { top: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4 text-center">
      <div className="font-display text-2xl font-extrabold text-foreground">{top}</div>
      <div className="mt-1 text-xs font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

/* --------------------------- Achievements ----------------------------- */
function Achievements() {
  const items = [
    {
      icon: <Cog className="h-5 w-5" />,
      title: "3+ Dự án AIoT/Robotics",
      desc: "Tự thiết kế và xây dựng — từ phần cứng đến thuật toán đến sản phẩm chạy thực tế.",
    },
    {
      icon: <Trophy className="h-5 w-5 text-accent" />,
      title: "🥇 Giải Nhất RoboCar",
      desc: "Xe tự hành dò line, leo bậc thang và xe điều khiển di chuyển linh hoạt.",
    },
    {
      icon: <Trophy className="h-5 w-5 text-accent" />,
      title: "🥈 Giải Nhì AIoT Smart Helmet",
      desc: "Mũ bảo hộ thông minh giám sát an toàn công nhân theo thời gian thực.",
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "AI + Embedded + Robotics",
      desc: "Kết hợp mô hình học máy với phần cứng nhúng và điều khiển tự động.",
    },
  ];
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="container-portfolio py-16">
        <div className="reveal mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Thành tích nổi bật
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Một vài cột mốc trong hành trình kỹ thuật
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="reveal group rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                {it.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Projects ----------------------------- */
type Project = {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  tech: string[];
  images: { src: string; alt: string }[];
  videos: { src: string; label: string }[];
  github?: string;
};

const PROJECTS: Project[] = [
  {
    id: "robocar",
    badge: "🥇 Giải Nhất",
    title: "Sáng Tạo RoboCar",
    subtitle: "Thiết kế xe dò line tự động và xe điều khiển dành cho thi đấu Robocar",
    overview:
      "RoboCar 2025 là cuộc thi đối kháng trực tiếp — mỗi đội chế tạo xe tự hành phải dò line, leo bậc thang và xe điều khiển di chuyển sa hình gắp bóng, thả bóng, bắn bóng trong thời gian 5–7 phút. Thách thức là đảm bảo độ chính xác cao dưới áp lực thi đấu thực tế.",
    challenges: [
      "Bám line chính xác qua ngã rẽ và leo bậc thang",
      "Kết hợp và điều phối nhiều cơ cấu hoạt động chính xác",
      "Tối ưu thuật toán cho cả hai xe vận hành ổn định",
    ],
    solutions: ["DC Motor", "Servo Control", "IR Sensor", "Ultrasonic Sensor", "PS2 Controller"],
    results: [
      "Xe dò line ổn định leo bậc thang và dừng đúng vị trí",
      "Xe điều khiển gắp và bắn bóng vào đúng mục tiêu",
      "Cả hai xe hoàn thành nhiệm vụ nhanh trong thi đấu đối kháng",
      "Đạt Giải Nhất Cuộc Thi Sáng Tạo RoboCar 2025",
    ],
    tech: ["Arduino", "Servo", "PID", "Ultrasonic", "L298N", "C++"],
    images: [
      { src: robocar1, alt: "Hình ảnh xe RoboCar trong quá trình thi đấu" },
      { src: robocar2, alt: "Xe điều khiển bắn bia mục tiêu" },
      { src: robocar3, alt: "Giải thưởng cuối cùng sau khi chiến thắng các đội thi" },
    ],
    videos: [
      { src: "/media/robocar/demo-01.mp4", label: "Video xe dò line leo bậc thang" },
      { src: "/media/robocar/demo-02.mp4", label: "Video xe điều khiển bắn bóng" },
    ],
    github: "https://github.com/Nguyen-Dinh-Truong/RoboCar_LineFollower_and_RemoteControl",
  },
  {
    id: "helmet",
    badge: "🥈 Giải Nhì",
    title: "AIoT Smart Helmet",
    subtitle: "Mũ bảo hộ thông minh giám sát an toàn công nhân theo thời gian thực",
    overview:
      "Tai nạn lao động tại công trường xây dựng phần lớn xảy ra vì không có hệ thống phát hiện và cảnh báo kịp thời. Dự án xây dựng mũ bảo hộ thông minh tích hợp AI phát hiện té ngã, theo dõi sinh hiệu và định vị công nhân theo thời gian thực — cảnh báo xử lý trực tiếp trên thiết bị đeo, dữ liệu truyền về dashboard qua LoRa Gateway.",
    challenges: [
      "Triển khai AI phát hiện té ngã trên vi điều khiển hạn chế tài nguyên",
      "Truyền dữ liệu tầm xa tránh gây tắc nghẽn mạng",
      "Định vị chính xác công nhân trong môi trường công trường",
    ],
    solutions: ["ESP32-S3", "TinyML", "1D-CNN", "UWB TWR", "INT8 Quantization", "LoRa Relay"],
    results: [
      "Độ chính xác phát hiện ngã 96.2%, độ trễ dưới 30ms",
      "Model giảm từ 127KB xuống 14KB sau khi quantize",
      "Định vị kép UWB + LoRa với indoor và outdoor trong công trường",
      "Giải Nhì Cuộc Thi Thiết Kế Điện Tử Việt Nam 2025",
    ],
    tech: ["ESP32-S3", "TinyML 1D-CNN", "IMU", "TFLite Micro", "LoRa", "UWB RTLS", "Raspberry Pi", "C++", "Python"],
    images: [
      { src: helmet1, alt: "Sản phẩm mũ bảo hộ sau khi hoàn thiện" },
      { src: helmet2, alt: "Các sensor trang bị trên mũ bảo hộ" },
      { src: helmet3, alt: "Giải Nhì và giấy khen" },
    ],
    videos: [
      { src: "/media/helmet/demo-01.mp4", label: "Video phát hiện té ngã" },
      { src: "/media/helmet/demo-02.mp4", label: "Video mũ bảo hộ thông minh" },
    ],
    github: "https://github.com/Nguyen-Dinh-Truong/AIoT_Smart_Helmet_for_Worker_Safety_Monitoring",
  },
  {
    id: "dqn",
    title: "Xe cân bằng tự hành di chuyển theo lane bằng DQN ",
    subtitle: "Xe cân bằng tự học bám làn — Reinforcement Learning trên phần cứng thực tế",
    overview:
      "Robot tự cân bằng tự học bám làn đường trên phần cứng thực tế. Robot phải đồng thời giữ thăng bằng vật lý và đưa ra quyết định điều hướng từ ảnh camera trong khi huấn luyện diễn ra online.",
    challenges: [
      "Huấn luyện Deep RL trực tiếp trên phần cứng thật",
      "Duy trì thăng bằng và điều hướng di chuyển bám lane chính xác",
      "Truyền và cập nhật weights realtime giữa Pi và training server",
    ],
    solutions: [
      "Deep Q-Network (DQN)",
      "MPU6050 IMU",
      "Replay Buffer",
      "Polyak Update",
      "OpenCV Lane Detection",
      "PID Balance",
      "Raspberry Pi Inference",
    ],
    results: [
      "Robot tự học bám làn ổn định trên track thực tế",
      "Inference ~32 FPS trên Raspberry Pi 4",
      "Weights cập nhật realtime qua TCP từ training server",
      "Toàn bộ tự xây từ đầu — phần cứng, thuật toán, giao tiếp",
    ],
    tech: ["Raspberry Pi 4", "ESP32-S3", "PyTorch", "Deep Q-Network (DQN)", "OpenCV", "PID", "TCP", "MPU6050", "C++", "Python"],
    images: [
      { src: dqn1, alt: "Robot Raspberry Pi trên đường line" },
      { src: dqn2, alt: "Xe cân bằng với thuật toán PID" },
      { src: dqn3, alt: "Raspberry Pi và ESP32 nối với nhau" },
    ],
    videos: [
      { src: "/media/dqn/demo-01.mp4", label: "Video xe cân bằng di chuyển theo lane" },
      { src: "/media/dqn/demo-02.mp4", label: "Video xe cân bằng với thuật toán PID" },
    ],
    github: "https://github.com/Nguyen-Dinh-Truong/RL_SelfBalancing_LaneFollowing",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="container-portfolio py-24">
        <div className="reveal mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Dự án nổi bật
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Từ ý tưởng đến hệ thống chạy được trong thế giới thực
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Ba dự án tiêu biểu thể hiện cách tôi kết hợp AI, Embedded Systems và Robotics
            để giải quyết các bài toán cụ thể.
          </p>
        </div>

        <div className="space-y-28">
          {PROJECTS.map((p, i) => (
            <ProjectCase key={p.id} project={p} reverse={i % 2 === 1} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCase({
  project,
  reverse,
  index,
}: {
  project: Project;
  reverse: boolean;
  index: number;
}) {
  return (
    <article className="reveal grid gap-12 lg:grid-cols-12">
      {/* Header strip */}
      <header className="lg:col-span-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Dự án 0{index}
              </span>
              {project.badge && (
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-foreground">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 text-[15px] text-muted-foreground">{project.subtitle}</p>
          </div>
          <a
            href={project.github ?? "https://github.com/"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-secondary"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </header>

      {/* Gallery */}
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <div className="grid grid-cols-6 gap-3">
          <img
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={1280}
            height={896}
            loading="lazy"
            className="col-span-6 aspect-[16/10] w-full rounded-xl border border-border object-cover"
          />
          <img
            src={project.images[1].src}
            alt={project.images[1].alt}
            width={1280}
            height={896}
            loading="lazy"
            className="col-span-3 aspect-[4/3] w-full rounded-xl border border-border object-cover"
          />
          <img
            src={project.images[2].src}
            alt={project.images[2].alt}
            width={1280}
            height={896}
            loading="lazy"
            className="col-span-3 aspect-[4/3] w-full rounded-xl border border-border object-cover"
          />

          {project.videos.map((v) => (
            <figure
              key={v.src}
              className="col-span-3 overflow-hidden rounded-xl border border-border bg-secondary"
            >
              <video
                src={v.src}
                controls
                preload="metadata"
                playsInline
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-3 py-2 text-xs font-medium text-muted-foreground">
                {v.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-8 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <Block title="Tổng quan" body={<p>{project.overview}</p>} />
        <Block
          title="Thách thức kỹ thuật"
          body={
            <ul className="space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          }
        />
        <Block
          title="Giải pháp"
          body={
            <div className="flex flex-wrap gap-2">
              {project.solutions.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          }
        />
        <Block
          title="Kết quả"
          body={
            <ul className="space-y-2">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          }
        />
        <Block
          title="Công nghệ sử dụng"
          body={
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          }
        />
      </div>
    </article>
  );
}

function Block({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
        {title}
      </h4>
      <div className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</div>
    </div>
  );
}

/* -------------------------------- Skills ------------------------------ */
function Skills() {
  const groups = [
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "AI / Machine Learning",
      items: [
        "CNN",
        "RNN/LSTM",
        "Transformer",
        "Reinforcement Learning",
        "TinyML",
        "Computer Vision",
        "PyTorch/TensorFlow",
      ],
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Embedded Systems",
      items: [
        "ESP32/Arduino",
        "Raspberry Pi",
        "PID Control",
        "MPU6050",
        "UART",
        "SPI",
        "I2C",
        "C/C++",
        "Python",
      ],
    },
    {
      icon: <Cog className="h-5 w-5" />,
      title: "Robotics",
      items: [
        "Autonomous Navigation",
        "Lane Detection",
        "Sensor Fusion",
        "Self Balancing Robot",
        "Computer Vision",
        "Control Systems",
      ],
    },
    {
      icon: <Radio className="h-5 w-5" />,
      title: "Wireless & Protocol",
      items: ["LoRa", "UWB RTLS", "TCP/IP", "Wi-Fi", "Bluetooth"],
    },
  ];
  return (
    <section id="skills" className="border-t border-border bg-secondary/60">
      <div className="container-portfolio py-24">
        <div className="reveal mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Kỹ năng &amp; Công nghệ
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Các công cụ tôi sử dụng
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="reveal rounded-2xl border border-border bg-background p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                {g.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Contact ------------------------------ */
function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="container-portfolio py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Liên hệ
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Tìm kiếm cơ hội để tạo ra giá trị thực.
              <br />
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Tôi mong muốn tham gia các dự án và đội ngũ kỹ thuật nơi AI, Robotics và Embedded Systems được ứng dụng để giải quyết những bài toán thực tế.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:truong57bmt@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" /> Gửi Email
              </a>
              <a
                href="/cv/Nguyen_Dinh_Truong.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                <Download className="h-4 w-4" /> Tải CV
              </a>
              <a
                href="tel:+84399536076"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Liên hệ
              </a>
            </div>
          </div>

          <div className="reveal grid gap-4">
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="truong57bmt@gmail.com"
              href="mailto:truong57bmt@gmail.com"
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              label="Điện thoại"
              value="+84 399 536 076"
              href="tel:+84399536076"
            />
            <ContactCard
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
              value="github.com/Nguyen-Dinh-Truong"
              href="https://github.com/Nguyen-Dinh-Truong"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              label="Vị trí"
              value="Đà Nẵng, Việt Nam"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:bg-secondary">
      <div className="flex items-center gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
          {icon}
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
          <div className="font-display text-sm font-bold text-foreground">{value}</div>
        </div>
      </div>
      {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
    </div>
  );
  if (!href) return inner;
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  );
}

/* ------------------------------- Footer ------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-portfolio flex flex-col items-start justify-between gap-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="font-display text-base font-extrabold text-foreground">
            NDT<span className="text-accent">.</span>
          </span>
          <span>© {new Date().getFullYear()} Nguyễn Đình Trường</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <ImageIcon className="h-3.5 w-3.5" />
          Portfolio cá nhân — AI • Robotics • Embedded Systems
        </div>
      </div>
    </footer>
  );
}
