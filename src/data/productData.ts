
export interface CategoryData {
  [key: string]: {
    info: string;
    items: { value: string; label: string }[];
  };
}

const productData: CategoryData = {
  laptops: {
    info: "High-performance laptops with sleek design and cutting-edge technology.",
    items: [
      { value: "macbook", label: "MacBook Pro" },
      { value: "dell-xps", label: "Dell XPS" },
      { value: "hp-spectre", label: "HP Spectre" }
    ]
  },
  phones: {
    info: "Latest smartphones featuring innovative technology and premium materials.",
    items: [
      { value: "iphone", label: "iPhone 15 Pro" },
      { value: "samsung", label: "Samsung Galaxy S23" },
      { value: "oneplus", label: "OnePlus 11" }
    ]
  },
  tablets: {
    info: "Versatile tablets perfect for creativity, productivity, and entertainment.",
    items: [
      { value: "ipad", label: "iPad Pro" },
      { value: "surface", label: "Microsoft Surface" },
      { value: "galaxy-tab", label: "Samsung Galaxy Tab" }
    ]
  }
};

export default productData;
