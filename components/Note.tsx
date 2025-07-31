import Markdown from "react-native-markdown-display";

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text

| Product Name                | Description                                                                                          | Status                         |
| --------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------ |
| Premium Wireless Headphones | High-quality over-ear headphones with noise cancellation technology and 30-hour battery life         | In Stock - Ready to Ship       |
| Smart Fitness Tracker       | Advanced fitness monitoring device with heart rate sensor, GPS tracking, and sleep analysis features | Limited Stock - 5 remaining    |
| Portable Solar Power Bank   | Eco-friendly charging solution with 20,000mAh capacity and dual USB ports for outdoor adventures     | Out of Stock - Restocking Soon |
| Ergonomic Office Chair      | Professional desk chair with lumbar support, adjustable height, and breathable mesh material         | In Stock - 15 available        |
| Bluetooth Smart Speaker     | Voice-controlled speaker with superior sound quality and smart home integration capabilities         | In Stock - Best Seller         |
| Wireless Charging Station   | Multi-device charging pad compatible with smartphones, earbuds, and smartwatches simultaneously      | In Stock - New Arrival         |
| Professional Camera Lens    | Ultra-wide angle lens with image stabilization for professional photography and videography          | Pre-order - Ships Next Month   |
| Gaming Mechanical Keyboard  | RGB backlit keyboard with tactile switches and programmable macro keys for gaming enthusiasts        | In Stock - Gaming Essential    |

`;

export default function Note() {
  return <Markdown style={markdownStyles}>{copy}</Markdown>;
}

const markdownStyles = {
  body: {
    color: "white",
    fontSize: 20,
  },
  table: {
    borderColor: "white",
    borderWidth: 1,
  },
  thead: {
    borderColor: "white",
    borderBottomWidth: 1,
  },
  tbody: {
    borderColor: "white",
  },
  th: {
    borderColor: "white",
    borderWidth: 1,
    color: "white",
  },
  td: {
    borderColor: "white",
    borderWidth: 1,
    color: "white",
  },
  tr: {
    borderColor: "white",
  },
};
