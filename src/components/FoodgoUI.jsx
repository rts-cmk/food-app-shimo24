import React from "react";

/* ==== küçük ikonlar (paketsiz) ==== */
const Icon = ({ d, size = 22, stroke = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const Search = (p) => (
  <Icon {...p} d="M21 21l-4.3-4.3M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
);
const Sliders = (p) => (
  <Icon
    {...p}
    d="M21 4H14M10 4H3M21 12h-7M10 12H3M21 20h-3M8 20H3M14 2v4M7 10v4M18 18v4"
  />
);
const Star = (p) => (
  <Icon
    {...p}
    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z"
  />
);
const HomeIcon = (p) => (
  <Icon {...p} d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
);
const User = (p) => (
  <Icon {...p} d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm7 9a7 7 0 0 0-14 0" />
);
const List = (p) => (
  <Icon {...p} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
);
const Heart = (p) => (
  <Icon
    {...p}
    d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z"
  />
);
const Plus = (p) => <Icon {...p} d="M12 5v14M5 12h14" />;

/* ==== liste verisi ==== */
const burgers = [
  {
    title: "Cheeseburger",
    subtitle: "Wendy’s Burger",
    rating: 4.9,
    price: 8.24,
    time: "26 mins",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Hamburger",
    subtitle: "Veggie Burger",
    rating: 4.8,
    price: 7.1,
    time: "24 mins",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Hamburger",
    subtitle: "Chicken Burger",
    rating: 4.6,
    price: 7.8,
    time: "22 mins",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Hamburger",
    subtitle: "Fried Chicken Burger",
    rating: 4.5,
    price: 8.5,
    time: "28 mins",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60",
  },
];

const DEFAULT_DESC =
  "The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.";

/* ==== ana sayfa ==== */
export default function FoodgoUI({
  onOpen = () => {},
  onOpenProfile = () => {},
}) {
  return (
    <div className="fg-page">
      <div className="fg-phone">
        {/* header */}
        <div className="fg-header">
          <div>
            <div className="fg-brand">Foodgo</div>
            <div className="fg-sub">Order your favourite food!</div>
          </div>
          <img
            className="fg-avatar"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=60"
            alt="profile"
          />
        </div>

        {/* search */}
        <div className="fg-search-row">
          <div className="fg-search">
            <Search size={18} />
            <input placeholder="Search" />
          </div>
          <button className="fg-filter" aria-label="Filter">
            <Sliders />
          </button>
        </div>

        {/* grid */}
        <div className="fg-grid">
          {burgers.map((b, i) => (
            <div
              key={i}
              className="fg-card"
              role="button"
              onClick={() =>
                onOpen({
                  id: i + 1,
                  title: b.title,
                  subtitle: b.subtitle,
                  rating: b.rating,
                  price: b.price,
                  time: b.time,
                  img: b.img,
                  desc: DEFAULT_DESC,
                })
              }
            >
              <img src={b.img} alt={b.title} />
              <div className="fg-card-body">
                <h3>{b.title}</h3>
                <p>{b.subtitle}</p>
                <div className="fg-card-footer">
                  <span>
                    <Star size={14} /> {b.rating}
                  </span>
                  <Heart size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom nav + FAB */}
        <div className="fg-bottom">
          <div className="fg-bottom-bar" />
          <div className="fg-notch" />
          <div className="fg-nav">
            <button aria-label="Home">
              <HomeIcon />
            </button>
            <button aria-label="Profile" onClick={onOpenProfile}>
              <User />
            </button>
            <button aria-label="Orders">
              <List />
            </button>
            <button aria-label="Favorites">
              <Heart />
            </button>
          </div>
          <button className="fg-fab" aria-label="Add">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
