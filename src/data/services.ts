// A content block within a service page column. Consecutive "p" blocks render as
// one paragraph group; "text" is a single unwrapped run of copy.
export type ServiceBlock = {
  type: "h2" | "h3" | "p" | "text";
  text: string;
};

// An image column sits at the top of its row unless marked as vertically centred.
export type ServiceImage = { src: string; centered?: boolean };

// A column is either an image (path, or path with alignment) or a stack of content blocks.
export type ServiceColumn = string | ServiceImage | ServiceBlock[];

// Service pages are a series of two-column rows, matching the reference layout.
export type ServiceRow = [ServiceColumn, ServiceColumn];

export type Service = {
  slug: string;
  title: string;
  cardTitle: string;
  cardSummary: string;
  cardImage: string;
  rows: ServiceRow[];
};

const p = (text: string): ServiceBlock => ({ type: "p", text });
const h2 = (text: string): ServiceBlock => ({ type: "h2", text });
const h3 = (text: string): ServiceBlock => ({ type: "h3", text });
const text = (value: string): ServiceBlock => ({ type: "text", text: value });

export const services: Service[] = [
  {
    slug: "concrete-installation",
    title: "Concrete Installation",
    cardTitle: "Concrete installation",
    cardSummary:
      "At ZNB Construction LTD we offer what we consider to be the best concrete installation team there is. Our operatives have been trained to the highest standards and boast years of experience.",
    cardImage: "/images/services/concrete-installation-card.jpg",
    rows: [
      [
        [
          p("At ZNB Construction LTD we offer what we consider to be the best concrete installation team there is. Our operatives have been trained to the highest standards and boast years of experience. They know that time is of the essence when handling your installation. Working efficiently and precisely is what ensures that no costly corrections are needed at a later date."),
          p("We also pride ourselves on our ability to react quickly to emergency or urgent jobs."),
        ],
        "/images/services/concrete-installation-1.jpg",
      ],
      [
        "/images/services/concrete-installation-2.jpg",
        [
          h2("Concrete Pouring"),
          p("ZNB Construction LTD are experts in all methods of concrete pouring. We have experience working with all pump types to work quickly once wet concrete has been poured into forms, to screed and float the surface to ensure an even and level finish. Compacting the concrete requires precision to ensure the correct air void content and requisite hardened properties. Finishing the surface thereafter is also time sensitive and involves artisanal-levels of skill to achieve a perfect result. Our operatives are experts in standard and specialist concrete finishes, including troweling, power floating, brushed, stamped, mirrored or textured."),
          p("Below are some examples of different pump types and the advantages they offer."),
        ],
      ],
      [
        [
          h2("Boom Pump"),
          p("At ZNB we favour using the boom pump for most jobs and we like to consider ourselves experts in its use. It is accurate and delivers precision pours with minimal wastage, perfect for most large scale installations."),
          p("Boom pumps are also a fantastic solution for reaching areas behind or around obstacles. A boom pump would have no trouble reaching over a house or office block, for example, to deliver poured concrete were it’s needed. They are safe and quick to set up. To find out more, please contact us today."),
        ],
        [
          h2("Static Pump"),
          p("Trailer mounted static pumps are compact and easy to place which, combined with their capacity for high pressure and volume, means that they can reach over vast distance, both horizontal and vertical. They offer low fuss, cost effective pumping solutions and can be placed at considerable distance from the pour site. Static Pumps are also optimal for sites that require high volume pours."),
          p("We can provide operatives to install and operate static pump lines of all lengths."),
        ],
      ],
      [
        [
          h2("Health and Safety"),
          p("ZNB Construction LTD takes the safety of our workers and other onsite personnel extremely seriously. All of our operatives are fully safety trained and use the required safety equipment when working on site at all times. They have all undergone specific working at height training as well."),
          p("When preparing for each job, we will write a tailor made Method statement and Rick Assessment. Many other companies leave this to the client, however at ZNB we insist on making the process as stress-free as possible for our customers. We are happy to work with you in assessing the safety requirements that your job requires."),
        ],
        "/images/services/safety.jpg",
      ],
    ],
  },
  {
    slug: "concrete-finishing",
    title: "Concrete Finishing",
    cardTitle: "Concrete finishing",
    cardSummary:
      "At ZNB our operatives are experts in all concrete finishing techniques. Whether you require a hard wearing, non-slip textured yard or smooth, attractively finished floor for a retail space; we can deliver precision every time.",
    cardImage: "/images/services/concrete-finishing-card.jpg",
    rows: [
      [
        [
          p("At ZNB our operatives are experts in all concrete finishing techniques. Whether you require a hard wearing, non-slip textured yard or smooth, attractively finished floor for a retail space; we can deliver precision every time."),
          h2("Wet Concrete Finishing"),
          h3("Power Floating"),
          p("Power Floating is a great way to achieve a smooth, level finish. A hand operated or ride on float machine is used after the concrete has partially set, been levelled and tamped. This is usually when walking on the surface produces 3-4mm indentations. Too wet and the process will simply destroy the surface, too dry and the machine will not be able to effectively cut or fill."),
          p("The resulting finish after power floating provides the perfect base for a commercial/retail environment or warehouse."),
          p("Power Floating is something of a specialty for ZNB and the finish that we are most often requested to provide. We are experts in achieving current surface regularity requirements, as set out in our client’s specifications. We are confident in our ability to deliver the perfect surface for your needs."),
        ],
        { src: "/images/services/emergency-response-1.jpg", centered: true },
      ],
      [
        "/images/services/concrete-finishing-float.jpg",
        [
          h3("Concrete Tamping"),
          text("Tamping not only offers an even finish to a concrete floor, it also ensures even distribution of aggregate material and thus a more dense, robust surface. Once fresh concrete has been poured, a tamper is used to lightly pat the surface up and down. There are many different types of tamping devices, from small hand-held ones to large scale industrial machines. All achieve a textured finish, most commonly used for industrial or farm yards and public walkways. At ZNB we boast a team of the best in the business. All of operatives are well experienced in working fast and efficiently to get it right first time."),
        ],
      ],
      [
        [
          h3("Brush Finishing"),
          text("Brush finishes are perfect for large areas that require a non-slip surface, such as a car park or lorry yard. Once the concrete has been properly levelled, a wire brush is drawn over the surface to create an even series of lines in the concrete. As well as providing better grip for vehicles, the brushed finish also helps to channel rain water for improved runoff."),
        ],
        "/images/services/concrete-finishing-brush.jpg",
      ],
      [
        "/images/services/concrete-finishing-dry.jpg",
        [
          h2("Dry Concrete Finishing"),
          text("Where the surface of an existing area of concrete is worn, but the underlying base is still structurally sound: a layer of topping can be applied to increase structural depth, strengthen the base and provide a new hardwearing surface. For customers wanting to explore the option of topping, our operatives first assess the existing base concrete to make sure that, although worn, it is free of cracks and any other structural weaknesses that will cause a lack of proper adhesion and the topping layer to break down."),
        ],
      ],
    ],
  },
  {
    slug: "site-operative-supply",
    title: "Site Operative Supply",
    cardTitle: "Site operative supply",
    cardSummary:
      "Our Onsite Operatives work to precise standards in order to deliver installations as per your exact requirements. They are experts in all aspects of concrete installation, finishing and corrections.",
    cardImage: "/images/services/site-operative-supply-card.jpg",
    rows: [
      [
        [
          p("Our Onsite Operatives work to precise standards in order to deliver installations as per your exact requirements. They are experts in all aspects of concrete installation, finishing and corrections. Whether pouring large volumes of wet concrete or finishing detailed architectural concrete; we want you to feel that your project is in a safe pair of hands."),
          p("The safety of your site is our top priority. All of our operatives are fully health and safety trained. They are provided with all of the safety equipment and protective clothing necessary. Responsive and are ready to travel to you at short notice: we are used to responding to ‘Save a Slab’ situations and understand that time and precision are of the essence. We are proud of our excellent track record in turning around emergency situations, with minimal disruption and cost to our customers."),
        ],
        "/images/services/site-operative-1.jpg",
      ],
      [
        "/images/services/site-operative-2.jpg",
        [
          p("Our hiring practices mean that we attract the best and brightest. In our experience: working smarter, not necessarily harder is what delivers the best results in a timely manner for our clients. We insist that our team of onsite operatives are the very best in the business."),
          p("For more information on our team, there various expertise and training standards; please contact ZNB today."),
        ],
      ],
    ],
  },
  {
    slug: "emergency-response",
    title: "Emergency Response",
    cardTitle: "Emergency response",
    cardSummary:
      "As with any enterprise or project, errors can be made and problems can occur when installing concrete. Misjudged mixes, honeycombing and grout runs are just some of the issues that ZNB are called out to on a routine basis.",
    cardImage: "/images/services/emergency-response-card.jpg",
    rows: [
      [
        [
          h2("Emergency Corrections"),
          p("As with any enterprise or project, errors can be made and problems can occur when installing concrete. Misjudged mixes, honeycombing and grout runs are just some of the issues that ZNB are called out to on a routine basis. With our years of experience as both a service provider and client, we understand that time is of the essence in ensuring that faults are corrected effectively. By its very nature; concrete is a material that becomes increasingly harder to work with over a short space of time. We have the ability to respond fast and expertise and equipment to resolve the issue quickly."),
          p("If you have any issues with a recent installation, please do not hesitate to contact us immediately."),
        ],
        "/images/services/emergency-response-2.jpg",
      ],
      [
        "/images/services/safety.jpg",
        [
          h2("Emergency Installation"),
          text("Unforeseen or overlooked needs for concrete pouring are also a regular occurrence. As well as needing to correct errors in a timely fashion, we are also used to responding to emergency wet concrete installations. Our team are always prepared and have everything in place to ensure that they can respond immediately, delivering exactly what you need with precision and efficiency."),
        ],
      ],
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
