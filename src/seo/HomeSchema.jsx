import { useEffect } from "react";

export default function HomeSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Burly Chem Products",
          url: "https://www.burlychemproducts.com/",
          logo: "https://www.burlychemproducts.com/logo.png",
          description:
            "Manufacturer of home care and cleaning products including toilet cleaner, floor cleaner, dishwash gel and liquid detergent.",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "KH No. 74/25, Gali No. 26, A Block, Kaushik Enclave",
            addressLocality: "Burari",
            addressRegion: "Delhi",
            postalCode: "110084",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-7631546903",
            contactType: "customer service",
          },
        },

        {
          "@type": "ItemList",
          name: "Burly Cleaning Products",
          itemListElement: [
            {
              "@type": "Product",
              name: "Burly Toilet Cleaner",
            },
            {
              "@type": "Product",
              name: "Burly Floor Cleaner",
            },
            {
              "@type": "Product",
              name: "Burly Dishwash Gel",
            },
            {
              "@type": "Product",
              name: "Burly Liquid Detergent",
            },
            {
              "@type": "Product",
              name: "Burly Glass Cleaner",
            },
          ],
        },

        {
          "@type": "Service",
          name: "Cleaning Product Distributorship",
          provider: {
            "@type": "Organization",
            name: "Burly Chem Products",
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          serviceType: "FMCG Cleaning Product Distributorship",
        },

        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is the manufacturer of Burly cleaning products?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Burly cleaning products are manufactured by Burly Chem Products, an Indian home care product manufacturer based in Delhi.",
              },
            },
            {
              "@type": "Question",
              name: "How can I become a distributor of Burly Chem Products?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can apply for distributorship by contacting Burly Chem Products through the official website.",
              },
            },
            {
              "@type": "Question",
              name: "What products does Burly Chem Products manufacture?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The company manufactures toilet cleaner, floor cleaner, dishwash gel, liquid detergent, glass cleaner and kitchen cleaner.",
              },
            },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return null;
}
