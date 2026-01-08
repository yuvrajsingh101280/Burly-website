import { useEffect } from "react";

export default function Schema() {
    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Burly Chem Products",
            url: "https://www.burlychemproducts.com",
            logo: "https://www.burlychemproducts.com/logo.png",
            description:
                "Manufacturer of home care and cleaning products including toilet cleaner, floor cleaner, dishwash gel and liquid detergent.",
            address: {
                "@type": "PostalAddress",
                streetAddress: "KH No. 74/25, Gali No. 26, A Block, Kaushik Enclave",
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
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
}
