import { Blog } from "@/types";
import BlogOneImage from '/public/images/blog_1.jpeg';
import BlogTwoImage from '/public/images/blog_2.jpeg';

// Images for Blog: The Ultimate Guide To Motorcycle Trails Near Miami
import BlogOneImageOne from '/public/images/blog/blog-1-image-1.png';
import BlogOneImageTwo from '/public/images/blog/blog-1-image-2.jpeg';
import BlogOneImageThree from '/public/images/blog/blog-1-image-3.png';
import BlogOneImageFour from '/public/images/blog/blog-1-image-4.jpeg';
import BlogOneImageFive from '/public/images/blog/blog-1-image-5.png';
import BlogOneImageSix from '/public/images/blog/blog-1-image-6.jpeg';
import BlogOneImageSeven from '/public/images/blog/blog-1-image-7.png';
import BlogOneImageEight from '/public/images/blog/blog-1-image-8.jpeg';

// Images for Blog: Daytona Bike Week 2023: Get Involved with One of Our Bikes
import BlogTwoImageOne from "/public/images/blog/blog-2-image-1.png";
import BlogTwoImageTwo from "/public/images/blog/blog-2-image-2.jpeg";
import BlogTwoImageThree from "/public/images/blog/blog-2-image-3.png";
import BlogTwoImageFour from "/public/images/blog/blog-2-image-4.jpeg";
import BlogTwoImageFive from "/public/images/blog/blog-2-image-5.png";
import BlogTwoImageSix from "/public/images/blog/blog-2-image-6.jpeg";
import BlogTwoImageSeven from "/public/images/blog/blog-2-image-7.png";
import BlogTwoImageEight from "/public/images/blog/blog-2-image-8.jpeg";

export const blogs: Blog[] = [
  {
    category: "Florida Motorcycle Routes",
    title: "The Ultimate Guide To Motorcycle Trails Near Miami",
    image: {
      src: BlogOneImage,
      alt: "blog-miami-and-florida-keys-motorcycle-trails",
    },
    overview:
      "If you haven’t experienced these South Florida motorcycle trails, you haven’t experienced Florida. This guide to the best motorcycle trails in and around Miami will give you everything you need to know about our favorite routes, including where to start and what highlights to look out for along the way. We’ve also picked out our favorite rides so you can take on Florida in rip-roaring style.",
    createdAt: "September 25, 2022",
    updatedAt: "September 25, 2022",
    seo: {
      title:
        "The Ultimate Guide To Motorcycle Trails Near Miami | Best Routes In FL",
      description:
        "This guide to the best motorcycle trails in and around Miami will give you everything you need to know about our favorite routes.",
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/the-ultimate-guide-to-motorcycle-trails-near-miami`,
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "miami motorcycle trials, motorcycle ride miami, motorcycle trails near me, motorcyle trials, motorcycle rides south florida, best motorcycle rides in south florida ",
        },
      ],
      openGraph: {
        locale: "en_US",
        title:
          "The Ultimate Guide To Motorcycle Trails Near Miami | Best Routes In FL",
        description:
          "This guide to the best motorcycle trails in and around Miami will give you everything you need to know about our favorite routes.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/the-ultimate-guide-to-motorcycle-trails-near-miami`,
        type: "article",
        article: {
          publishedTime: "2022-09-25T11:19:21+00:00",
          modifiedTime: "2022-09-25T11:19:21+00:00",
          authors: ["Nicolas Schele "],
        },
        images: [
          {
            url: BlogOneImage.src,
            alt: "miami-and-florida-keys-motorcycle-trails",
            width: 1200,
            height: 627,
          },
        ],
      },
    },
    contents: [
      {
        title:
          "If you haven’t experienced these South Florida motorcycle trails, you haven’t experienced Florida. This guide to the best motorcycle trails in and around Miami will give you everything you need to know about our favorite routes, including where to start and what highlights to look out for along the way. We’ve also picked out our favorite motorcycles so you can take on Florida in rip-roaring style.",
        descriptions: [
          "Are you ready to take on Florida on the back of your dream ride? We’ve picked out our favorite motorcycle trails so you can cruise through The Sunshine State via Florida’s best coastal views and alligator-infested waters. We’ve also picked out some of our favorite bars and beaches along the trail so you can turn your Miami Motorcycles tour into the ultimate day out. From the trail highlights to important information about the route, learn everything you need to know below.",
        ],

        heading: "h3",
        isAck: true,
      },
      {
        id: "ocean_drive",
        title: "Ocean Drive by Motorcycle: Experience The Heart of Miami",
        descriptions: [
          "They say you haven’t experienced Miami until you have experienced South Beach and Ocean Drive. What better way to experience one of the world’s greatest coastal drives than on the back of a Harley Davidson? Here’s what to expect from the trail and how to get there from our motorcycle rental shop.",
        ],

        heading: "h1",
        isAck: false,
      },
      {
        title: "Ocean Drive highlights",
        descriptions: [
          "If it’s your first time experiencing Ocean Drive, you’ll want to do more than soak up the scenery. This part of Miami is packed with buzzing bars, neon lights, and some of Florida’s best beaches. Ocean Drive is also the location of the famed Casa Casurina, which is the residence of the late Italian fashion designer Gianni Versace. This area is known for its neon-lit art deco buildings, a style that popped up in the 1920s and has been a defining characteristic of Miami architecture since. We recommend taking a detour to ride through the Art Deco Historic District and, of course, stopping by South Beach on the way.",
        ],

        heading: "h2",
        isAck: false,
      },
      {
        title: "Important information about Ocean Drive",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p>We are located just a few miles from Miami Beach and Ocean Drive. It will take you around thirty minutes to hop on your rented motorcycle and ride over MacArthur Causeway. There really is no more exhilarating way to experience the city skyline than on the back of a Harley. Ocean Drive is an 8.2 mile (13km) route that starts from <a href="https://www.google.com/maps/dir//miami+motorcycle+rentals/@25.7574803,-80.2259106,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9c75fc686f159:0xe6bc7444a59611bb!2m2!1d-80.2070065!2d25.7860816">1222 NW 7th Ave, FL 33136</a>. You can expect congestion and holdups between Fifth and 16th Street, which is particularly chaotic at night. While drivers are held up, you can weave through the traffic while soaking in Miami’s most action-packed area.</p>`,
        ],
        image: {
          src: BlogOneImageOne,
          alt: "ocean-drive-motorcycle-route-map",
        },
      },
      {
        title: "Where to stop along the way",
        heading: "h2",
        isAck: false,
        descriptions: [
          "If you’re heading down to Ocean Drive at night, there are dozens of neon-lit bars to choose from. We’ve listed some of our favorite bars for first-timers below.",
        ],
      },
      {
        title: "The Clevelander Bar",
        heading: "h3",
        isAck: false,
        descriptions: [
          "The Clevelander Bar may be a tourist cliche, but there’s a reason that the Clevelander is one of the most popular destinations on Ocean Drive. There’s no dress code, non-stop music, and an outdoor pool on the beach at the Clevelander; it feels like spring break all year round.",
        ],
      },
      {
        title: "Nikki Beach",
        heading: "h3",
        isAck: false,
        descriptions: [
          "Nikki Beach is Florida’s first luxury beach club, and it’s also one of the places you are most likely to catch celebrities hanging out in Miami. It’s a private spot with a great menu that guarantees a luxury experience in the Sunshine State’s high-end paradise.",
        ],
      },
      {
        title: "Voodoo Rooftop & Hookah",
        heading: "h3",
        isAck: false,
        descriptions: [
          "After sunset, the Voodoo Rooftop & Hookah bar comes alive. You can grab frozen cocktails, tropical drinks and hit the dancefloor while soaking in fantastic views of South Beach. The nightclub is open until after-hours, even on a Sunday.",
        ],
      },
      {
        title: "Recommended for this route…",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p>To get the full Ocean Drive experience, we recommend our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-interceptor" target="_blank" rel="noopener noreferrer">Harley Davidson Ultra Interceptor</a>. You’ll hear the roar and feel the power of the Screaming Eagle as you cruise down the coast on this classic motorcycle.</p>`,
        ],
        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-interceptor`,
        image: {
          src: BlogOneImageTwo,
          alt: "harley-davidson-ultra-interceptor-for-rent",
        },
      },
      {
        title: "Tamiami Trail by Motorcycle: Cruise From Coast To Coast",
        heading: "h1",
        isAck: false,
        id: "tamiami_trail",
        descriptions: [
          "There is a lot more to the state than beaches and spring break. The Tamiami Trail is a phenomenal coast-to-coast drive that will take you through some of Florida’s most scenic parks and untamed wildlife. Ever driven around a gator swamp on the back of a Harley Davison? There’s nothing quite like it.",
        ],
      },
      {
        title: "Tamiami Trail highlights",
        heading: "h2",
        isAck: false,
        descriptions: [
          "The Tamiami Trail spans more than 100 miles in total which means there are plenty of opportunities to explore the vast range of Florida’s landscapes along the way. By motorcycle, this route will take you straight through the Everglades. Here, you will find all kinds of local wildlife, including alligator swamps, bobcats, deer, and foxes. Make it to the Florida Panther National Wildlife Refuge. You may even be lucky enough to see these wild cats in their natural habitat.",
          "If you complete the route, you will finish up on the west coast, where you will be able to explore the paradise coastlines overlooking the Gulf of Mexico. We recommend this route to riders who want to escape the city and explore a whole other side of South Florida.",
        ],
      },
      {
        title: "Important information about the Tamiami Trail",
        heading: "h2",
        isAck: false,
        descriptions: [
          "This route starts at our motorcycle rental shop here in Miami, Florida. The entire trail is approximately 111 miles and runs from our shop on the Atlantic side all the way to Naples Pier on the Gulf side of Florida. The one-way route is manageable in less than three hours but if you are planning on making it a full loop, make sure that you leave early and bring plenty of water. If you want to make a smaller loop, you can ride through the everglades to Big Cypress National Preserve. Big Cypress National Preserve is an enormous preserved area of swampland full of swamp plants and animal life. It is around the halfway mark, which means you can complete this smaller loop in approximately three hours.",
        ],
        image: {
          src: BlogOneImageThree,
          alt: "everglades-motorcycle-route-map",
        },
      },
      {
        title: "Where to stop along the way",
        heading: "h2",
        isAck: false,
        descriptions: [
          "There are plenty of places to stop off and explore the wildlife along the way. Exploring the untamed wilderness in the everglades on your motorbike rental is a huge part of the adventure. If you want to spend an entire Saturday or Sunday enjoying the area, here are a couple of additional stop-offs along the way. ",
        ],
      },
      {
        title: "Miccosukee Indian Village",
        heading: "h3",
        isAck: false,
        descriptions: [
          "This surviving village of the Miccosukee Tribe is located approximately 40 miles west of Miami on the Tamiami Trail. You can learn about one of Florida’s oldest indigenous tribes and get a demonstration of the infamous Miccosukee alligator wrestling. There’s also a great museum if you want to learn more about the Miccosukee tribe. ",
        ],
      },
      {
        title: "Florida Panther Natural Wildlife Refuge ",
        heading: "h3",
        isAck: false,
        descriptions: [
          `<p><span data-preserver-spaces="true">The Florida panther is an endangered subspecies of Puma concolor, a large cat of the subfamily Felinae. This is the only place you’ll find them east of the Mississippi River. The Florida Panther Natural Wildlife Refuge is open to the public, and you’ll be riding right past it. Take a look at the&nbsp;</span><a class="editor-rtfLink" href="https://www.fws.gov/refuge/florida-panther" target="_blank" rel="noopener"><span data-preserver-spaces="true">Florida Panther Park Map</span></a><span data-preserver-spaces="true">&nbsp;to find out where you’re most likely to see panther tracks, red hawks, and unique habitats hidden among the trees.&nbsp;</span></p>`,
        ],
      },
      {
        title: "Naples Pier",
        heading: "h3",
        isAck: false,
        descriptions: [
          "Naples Pier is a popular tourist attraction on the Gulf of Mexico. Parking is pay per 5 minutes or $3 an hour. Riding up to the ocean and kicking back on the sandy shores is the perfect way to end one of our favorite motorcycle trails in the south of Florida.",
        ],
      },
      {
        title: "Recommended for this route…",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p>If you’re going to take on the Everglades and the swampland, you don’t need a dirt bike, you need our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-electra-glide-ultra-classic" target="_blank" rel="noopener noreferrer">Harley Davidson Electra Glide Ultra Classic</a>. This motorcycle was built for long trips and is especially comfortable if you are riding with a partner. There’s plenty of storage space and you won’t believe how smooth the ride is once you hit the road.</p>`,
        ],
        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-electra-glide-ultra-classic`,
        image: {
          src: BlogOneImageFour,
          alt: "harley-davidson-electra-glide-ultra-classic-for-rent",
        },
      },
      {
        title: "Miami To Key West: The Florida Keys Route",
        heading: "h1",
        isAck: false,
        id: "miami_to_key_west",
        descriptions: [
          "You know those car commercials that showcase drivers cruising over scenic highways that overlook the ocean? A lot of them were filmed along the Overseas Highway, which connects Miami to Key West.",
        ],
      },
      {
        title: "Florida Keys Highlights",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p>When you travel from downtown Miami along Old Cutler Road, it’s almost all coastal views and the open road. When you ride down to Key West, you’ll start to get a clear picture of why Florida is known as the Sunshine State. One of the Florida Keys route highlights is that you’ll likely meet other riders along the highway who will share their favorite local spots. With the <a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-green">Indian Roadmaster as your ride</a>, you can easily turn a one-day drive into a weekend trip.</p>`,
        ],
      },
      {
        title: "Important information about the route",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p>The route is approximately 165 miles, and more than 2/3 of this is across the Overseas Highway. We recommend taking the local scenic route, which has better views and avoids most of the city’s highways. The route will start from our motorcycle rental shop located at <a href="https://www.google.com/maps/dir//miami+motorcycle+rentals/@25.7574803,-80.2259106,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9c75fc686f159:0xe6bc7444a59611bb!2m2!1d-80.2070065!2d25.7860816">1222 NW 7th Ave, FL 33136</a>.</p>`,
          "Riders should first make their way to Biscayne Boulevard, which will then transition to Brickell Avenue. From Brickell Avenue, you will follow the coastal road into South Miami Avenue.",
          `<p>Once you make it to South Miami Avenue, take this road to South Bayshore Drive. Follow South Bayshore Drive into the heart of Coconut Grove, know as <a href="https://www.google.com/maps/place/CocoWalk/@25.7286658,-80.2442519,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b7cf7625235f:0x52beba0782836eb8!8m2!3d25.7286658!4d-80.2420632">CocoWalk</a>. Make the turn into Main Highway and follow that road until you reach <a href="https://www.google.com/maps/place/Cartagena+Park,+Coral+Gables,+FL+33143/@25.7054107,-80.2624791,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9c81a2921289d:0x6fc7bb9adc9519c5!8m2!3d25.7053056!4d-80.2602713">Cartagena Park</a>.</p>`,
          `<p>From Cartagena Park, the rest of the route will take place on <a href="https://en.wikipedia.org/wiki/Old_Cutler_Road">Old Cutler Road</a>, a beautiful road under a tunnel of trees. Old Cutler Road will provide your main path for a few miles, passing in front of Pinecrest Gardens and Deering Estate.</p>`,
          `<p>Old Culter Road will eventually end at an intersection with U.S. Route 1 South Dixie Highway. You will make a left, taking you south towards <a href="https://www.google.com/maps/place/Florida+City,+FL/@25.4405158,-80.501801,13z/data=!3m1!4b1!4m5!3m4!1s0x88d9e0cb35a8cf39:0xf7bdead0fe918320!8m2!3d25.4478898!4d-80.4792237">Florida City</a>. At Florida City, you can choose two ways to enter Key Largo, <a href="https://www.google.com/maps/place/Card+Sound+Rd,+Florida/@25.3702938,-80.4886157,11.79z/data=!4m5!3m4!1s0x88d9df6798343601:0x657408ae84d63e4f!8m2!3d25.3438696!4d-80.4148279">Card Sound Road</a>, or continue on U.S. Route 1.</p>`,
          "After you reach Key Largo, the majority of the route overlooks the Atlantic Ocean. You’ll cross over 42 bridges, including the Seven Mile Bridge at Marathon, which you may recognize from popular car commercials. There are five popular keys to visit, including Key Largo, Islamorada, Marathon, Big Pine Key, and Key West.",
        ],
        image: {
          src: BlogOneImageFive,
          alt: "miami-to-key-west-motorcycle-route-map",
        },
      },
      {
        title: "Where to stop along the way",
        heading: "h2",
        isAck: false,
        descriptions: [
          "There are plenty of beaches along the way and many great spots for snorkeling and diving. Each of the keys has a unique atmosphere, and the unique mix makes the drive down to Key West one of our all-time favorite routes.",
        ],
      },
      {
        title: "Bahia Honda State Park",
        heading: "h3",
        isAck: false,
        descriptions: [
          "Bahia Honda State Park is a great place to stop and soak in the scenery. Suppose you’re looking to try activities like snorkeling, kayaking, surfing, or other water-based activities. In that case, Bahia Honda State Park is a great stop-off point. Dry Tortugas offers similar scenic views and water-based activities.",
        ],
      },
      {
        title: "Alabama Jack’s Florida Beach Bar",
        heading: "h3",
        isAck: false,
        descriptions: [
          "Alabama Jack’s is a Florida beach bar located in Key Largo. There’s not much else along the road other than the bar, a popular spot for locals and bikers. Alabama Jack’s has been standing on the water for 50 years and is a great place to catch the house band and maybe even spot an alligator out on the water.",
        ],
      },
      {
        title: "Gilbert’s Resort Key Largo",
        heading: "h3",
        isAck: false,
        descriptions: [
          "If you are heading down to Miami on vacation, why not make your trip to the Keys last a whole weekend? Gilbert’s Resort is a unique hotel that features waterfront rooms and a lively tiki bar. Staying overnight will give you more time to soak up the Florida Keys and visit the parks and beaches each Key has to offer.",
        ],
      },
      {
        title: "Recommended for this route…",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p><span data-preserver-spaces="true">There’s only one thing that beats cruising along the Overseas Highway in a brand new car, and that’s riding along the Overseas Highway on the back of our fully-equipped&nbsp;</span><a class="editor-rtfLink" href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-green" target="_blank" rel="noopener"><span data-preserver-spaces="true">Indian Roadmaster</span></a><span data-preserver-spaces="true">! The Indian Roadmaster motorcycle offers an unbelievably comfortable ride for two. It has all the bells and whistles, including Bluetooth connection and GPS navigation.</p>`,
        ],
        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-green`,
        image: {
          src: BlogOneImageSix,
          alt: "indian-roadmaster-green-for-rent",
        },
      },
      {
        title: "Lake Okeechobee: Ride Through Stunning Countryside",
        heading: "h1",
        isAck: false,
        id: "lake_okeechobee",
        descriptions: [
          "Lake Okeechobee is the largest freshwater lake in Florida and the second largest lake in the U.S. Riding the whole loop around the lake will take you more than an afternoon. This route offers fantastic trails that will give you stunning views of Florida’s inland sea.",
        ],
      },
      {
        title: "Lake Okeechobee highlights",
        heading: "h2",
        isAck: false,
        descriptions: [
          "The drive up to Lake Okeechobee passes through the Everglades. If you are looking for trees and wilderness rather than sand and sea, this is a route for you. Along the way, you’ll pass through Kissimmee River Valley.",
        ],
      },
      {
        title: "Important information about the route",
        heading: "h2",
        isAck: false,
        descriptions: [
          "Suppose you want to circle the entire lake. In that case, you’ll need to take on the Lake Okeechobee Scenic Trail (LOST), which forms part of the Florida National Scenic Trail. You can join LOST from Belle Glade, 80 miles from our motorcycle rental shop in Miami. The drive up to Lake Okeechobee passes directly through the Everglades, making it simple to navigate. The distance around the entire lake is more than 110 miles.",
        ],
        image: {
          src: BlogOneImageSeven,
          alt: "miami-to-lake-okeechobee-motorcycle-route-map",
        },
      },
      {
        title: "Where to stop along the way",
        heading: "h2",
        isAck: false,
        descriptions: [
          "Most of the popular stopping points around Lake Okeechobee are scenic points that you will discover yourself on the ride down. There are a couple of places along the way that we particularly recommend.",
        ],
      },
      {
        title: "Arnold’s Wildlife Rehabilitation",
        heading: "h3",
        isAck: false,
        descriptions: [
          "You’ll find animals like lemurs, otters, deer, monkeys, panthers, even a wallaroo at Arnold’s wildlife rehabilitation center. The center also features a butterfly garden which is great fun to walk through.",
        ],
      },
      {
        title: "Seminole Brighton Casino",
        heading: "h3",
        isAck: false,
        descriptions: [
          "If you love to gamble, you’ll love Central Florida’s #1 gaming destination. Inside this 27,000-square-foot casino, you’ll find over 400 slot and gaming machines. You can grab a bite to eat at Josiah Restaurant or Josiah Bar.",
        ],
      },
      {
        title: "The Big O Flea Market",
        heading: "h3",
        isAck: false,
        descriptions: [
          "The Big O Flea Market is a great flea market located at Lake Okeechobee. In addition to a great selection of antiques, you’ll find tasty BBQ & Mexican food.",
        ],
      },
      {
        title: "Recommended for this route…",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p>If you’re going to take on the gator-infested Everglades, you’re going to want to be on the back of our fire engine red <a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-limited-flhtk">Harley Davidson Ultra Limited</a>. It’s built for Florida’s hot roads and is equipped with a Bluetooth sound system, passenger backrest, and saddlebags for your carry-ons.</p>`,
        ],
        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-limited-flhtk`,
        image: {
          src: BlogOneImageEight,
          alt: "harley-davidson-ultra-limited-flhtk-for-rent",
        },
      },
      {
        title: "Your Next Miami Adventure Begins With Miami Motorcycle Rentals",
        heading: "h1",
        isAck: false,
        id: "your_next_miami",
        descriptions: [
          "At Miami Motorcycle Rentals, we are passionate about motorcycles and strive to provide the absolute best experience for our customers. ",
          "If you need additional assistance booking a motorcycle online, please give us a call at +1 305 803 1241",
          `<p><span data-preserver-spaces="true">Booking a bike with Miami Motorcycles is as easy as 1,2,3. Simply&nbsp;</span><a class="editor-rtfLink" href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental" target="_blank" rel="noopener"><span data-preserver-spaces="true">browse our bikes</span></a><span data-preserver-spaces="true">, and when you’ve found a ride you like, secure your dates online with our convenient and secure online booking.&nbsp;</span></p>`,
          "When you’re ready to hit the road, each rider is fully covered by our $300K liability coverage as part of our worry-free guarantee. ",
          "Need additional assistance with our list of motorcycle routes – or any other trip or loop nearby?",
          "Please email us at info@miamimotorcyclerentals.com, and a member of our team will be happy to assist. ",
        ],
      },
    ],
  },
  {
    category: "Daytona Bike Week",
    title: "Daytona Bike Week 2023: Get Involved with One of Our Bikes",
    image: {
      src: BlogTwoImage,
      alt: "blog-daytona-bike-week-2023",
    },
    overview:
      "If you haven’t experienced these South Florida motorcycle trails, you haven’t experienced Florida. This guide to the best motorcycle trails in and around Miami will give you everything you need to know about our favorite routes, including where to start and what highlights to look out for along the way. We’ve also picked out our favorite rides so you can take on Florida in rip-roaring style.",
    createdAt: "November 22, 2022",
    updatedAt: "November 22, 2022",
    seo: {
      title: "Daytona Bike Week 2023 | Everything You NEED To Know And More",
      description:
        "Be prepared for Daytona Bike Week 2023 with the best rides and events. Need a bike? Rent with us at Miami Motorcycle Rentals.",
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/daytona-bike-week-2023-get-involved-with-one-of-our-bikes`,
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "daytona bike week 2023, bike week 2023, bike week daytona 2023, when is daytona bike week, daytona beach bike week 2023",
        },
      ],
      openGraph: {
        locale: "en_US",
        title: "Daytona Bike Week 2023 | Everything You NEED To Know And More",
        description:
          "Be prepared for Daytona Bike Week 2023 with the best rides and events. Need a bike? Rent with us at Miami Motorcycle Rentals.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/daytona-bike-week-2023-get-involved-with-one-of-our-bikes`,
        type: "article",
        article: {
          publishedTime: "2022-11-22T23:42:37+00:00",
          modifiedTime: "2022-11-22T23:42:37+00:00",
          authors: ["Nicolas Schele"],
        },
        images: [
          {
            url: BlogTwoImage.src,
            alt: "miami-and-florida-keys-motorcycle-trails",
            width: 1200,
            height: 627,
          },
        ],
      },
    },
    contents: [
      {
        title: "What date is Daytona Bike Week 2023?",
        heading: "h1",
        isAck: true,
        id: "what_date_is",
        descriptions: [
          `<p><a href="https://officialbikeweek.com/"><span style="font-weight: 400;">Daytona Beach Bike Week</span></a><span style="font-weight: 400;"> is a 10-day motorcycle rally. Where two-wheel-engined enthusiasts gather together to celebrate all things bike. The Daytona bike week </span><b>starts on March 3, 2023, and finishes on March 12, 2023</b><span style="font-weight: 400;">. Here you can enjoy our Spring Florida weather, wide open beaches, welcoming parks, friendly restaurants, and of course, Daytona Bike Week events.</span></p>`,
          `<p><span style="font-weight: 400;">Don’t have a bike? Don’t worry, you can get involved in the Daytona Beach event by renting a motorcycle from us at </span><a href="https://www.miamimotorcyclerentals.com/"><span style="font-weight: 400;">Miami Motorcycle Rentals</span></a><span style="font-weight: 400;">. Choose from one of our 18 top-class rides, from Harley-Davidson Cruisers to Suzuki Street bikes. Once you’ve chosen your bike, you’ll be able to take the scenic coast road of A1A right up to Daytona and be part of this wonderous motorcycle extravaganza.</span></p>`,
        ],
      },
      {
        title: "What rides are happening during Daytona Bike week 2023?",
        heading: "h1",
        isAck: false,
        id: "what_rides_are",
        descriptions: ["Not sure which rides to do? Let us help you decide."],
      },
      {
        title: "Street Festival Ride",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p><span style="font-weight: 400;">For the newer rider, the </span><a href="https://www.daytonabeach.com/biketoberfest/top-rides/street-festival-ride/"><span style="font-weight: 400;">Street Festival Ride</span></a><span style="font-weight: 400;"> is perfect. Get yourself a </span><a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883-brown"><span style="font-weight: 400;">Harley Davidson Sportster Iron 883</span></a><span style="font-weight: 400;"> and enjoy this short 4-mile trip to Main Street and Midtown and back. Its simple styling and classic looks make it the ideal partner for this short trip. Along the way, you’ll be able to enjoy Beach Street’s Riverfront Shops of Daytona Beach, paw at the motorcycles at the </span><a href="https://www.indianmotorcycledaytonabeach.com/"><span style="font-weight: 400;">Indian Motorcycle Daytona Beach dealership</span></a><span style="font-weight: 400;">, and soak in some history at the </span><a href="https://www.daytonabeach.com/things-to-do/arts-and-culture/historical-sites/"><span style="font-weight: 400;">Midtown Historic District</span></a><span style="font-weight: 400;">.</span></p>`,
        ],
        image: {
          src: BlogTwoImageOne,
          alt: "street-festival-ride-dayton-bike-week-2023",
        },
      },
      {
        title:
          "Recommended for this route. Click the image for more details about the motorcycle.",
        heading: "h2",
        isAck: false,
        descriptions: [],
        image: {
          src: BlogTwoImageTwo,
          alt: "harley-davidson-sportster-iron-883-brown-for-rent",
        },
        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883-brown`,
      },
      {
        title: "National Seashore Ride",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p><span style="font-weight: 400;">As an adventurer, you should try our </span><a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-v-rod-muscle"><span style="font-weight: 400;">Harley Davidson V Rod Muscle</span></a><span style="font-weight: 400;"> on the </span><a href="https://www.daytonabeach.com/biketoberfest/top-rides/national-seashore-ride/"><span style="font-weight: 400;">National Seashore Ride</span></a><span style="font-weight: 400;">. Going through New Smyrna Beach to Canaveral National Seashore and back. This motorcycle features a liquid-cooled 1250cc V-Twin Revolution engine, Brembo performance brakes, a slipper clutch, and ABS. Giving you the perfect balance of performance and control. This freedom-inspired 34-mile run takes you through Florida’s Canaveral National Seashore, south of New Smyrna Beach. As you ride you’ll discover the marshes of </span><a href="https://www.sprucecreekpreserve.com/"><span style="font-weight: 400;">Spruce Creek Preserve</span></a><span style="font-weight: 400;">, the historic </span><a href="https://www.ponceinlet.org/Visit/"><span style="font-weight: 400;">Ponce Inlet Lighthouse</span></a><span style="font-weight: 400;">, and the laid-back beach vibe of Flagler Avenue. As you reach the seashore you’ll be infused with a sense of freedom and belonging.</span></p>`,
        ],
        image: {
          src: BlogTwoImageThree,
          alt: "national-seashore-ride-daytona-beach-motorcycle-route-map",
        },
      },
      {
        title:
          "Recommended for this route. Click the image for more details about the motorcycle.",
        heading: "h2",
        isAck: false,
        descriptions: [],
        image: {
          src: BlogTwoImageFour,
          alt: "harely-davidson-v-rod-muscle-for-rent",
        },
        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-v-rod-muscle`,
      },
      {
        title: "Lucky Ride",
        heading: "h2",
        isAck: false,
        descriptions: [
          `<p><span style="font-weight: 400;">The </span><a href="https://www.daytonabeach.com/biketoberfest/top-rides/lucky-ride/"><span style="font-weight: 400;">Lucky Ride</span></a><span style="font-weight: 400;"> goes from Daytona Beach Racing &amp; Card Club to DeLand and back. This ride is a cool 70 miles, perfect for our </span><a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-limited-flhtk"><span style="font-weight: 400;">Harley Davidson Ultra Glide</span></a><span style="font-weight: 400;">. You and your companion will enjoy the comfort of the Harley’s riding position as you purr along the highway. What’s more, this bike has tons of luggage space, GPS navigation, and a Touchscreen Boom!™ Box 6.5 GT Bluetooth Audio System for those sweet ride sounds. Beginning at </span><a href="https://www.daytonabeachpoker.com/"><span style="font-weight: 400;">Daytona Beach Racing &amp; Card Club</span></a><span style="font-weight: 400;"> where you can try your luck, this ride loops the Daytona International Speedway before cruising along the award-winning Woodland Boulevard in DeLand. With several refuel stops along the way, you’ll then cruise the breathtaking Enterprise-Osteen Road by Lake Monroe and </span><a href="https://www.volusia.org/services/community-services/parks-recreation-and-culture/parks-and-trails/park-facilities-and-locations/ecological-nature-parks/green-spring-park.stml"><span style="font-weight: 400;">Green Springs State Park</span></a><span style="font-weight: 400;"> before heading back to Daytona Beach.</span></p>`,
        ],
        image: {
          src: BlogTwoImageFive,
          alt: "lucky-ride-daytona-beach-motorcycle-route-map",
        },
      },
      {
        title:
          "Recommended for this route. Click the image for more details about the motorcycle.",
        heading: "h2",
        isAck: false,
        descriptions: [],
        image: {
          src: BlogTwoImageSix,
          alt: "harley-davidson-ultra-limited-flhtk-for-rent",
        },

        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-limited-flhtk`,
      },
      {
        title: "",
        heading: "h3",
        isAck: false,
        descriptions: [
          `<p><span style="font-weight: 400;">Other rides to take in on one of our </span><a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental"><span style="font-weight: 400;">rental motorcycles</span></a><span style="font-weight: 400;">, is </span><a href="https://www.daytonabeach.com/biketoberfest/top-rides/the-loop/"><span style="font-weight: 400;">The Loop</span></a><span style="font-weight: 400;">, the </span><a href="https://www.daytonabeach.com/biketoberfest/top-rides/iconic-us-hwy-1-ride/"><span style="font-weight: 400;">Iconic U.S. Hwy 1 Ride</span></a><span style="font-weight: 400;">, </span><a href="https://www.daytonabeach.com/biketoberfest/top-rides/ponce-inlet-ride/"><span style="font-weight: 400;">Ponce Inlet Ride</span></a><span style="font-weight: 400;">, and the incredible 110-mile </span><a href="https://www.daytonabeach.com/biketoberfest/top-rides/old-city-ride/"><span style="font-weight: 400;">Old City Ride</span></a><span style="font-weight: 400;"> to St. Augustine and back. The latter is ideal using one of our </span><a href="${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-green"><span style="font-weight: 400;">Indian Roadmasters</span></a><span style="font-weight: 400;">.</span></p>`,
        ],
        image: {
          src: BlogTwoImageSeven,
          alt: "ponce-inlet-ride-daytona-bike-week-2023-motorcycle-route-map",
        },
      },
      {
        title:
          "Recommended for this route. Click the image for more details about the motorcycle.",
        heading: "h2",
        isAck: false,
        descriptions: [],
        image: {
          src: BlogTwoImageEight,
          alt: "indian-roadmaster-green-for-rent",
        },
        imageLink: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-green`,
      },
      {
        title: "Where can I find out about Daytona Bike Week 2023 Events?",
        heading: "h1",
        isAck: false,
        id: "where_can_i",
        descriptions: [
          `<p><span style="font-weight: 400;">Get in touch at </span><a href="https://www.daytonabikeweek.com/bike-week-welcome-center"><span style="font-weight: 400;">Official Bike Week Welcome Center</span></a><span style="font-weight: 400;"> located at </span><a href="https://www.onedaytona.com/"><span style="font-weight: 400;">ONE DAYTONA</span></a><span style="font-weight: 400;">. Daytona beach’s brand new outdoor lifestyle and entertainment location. Just across from the </span><a href="https://www.daytonainternationalspeedway.com/"><span style="font-weight: 400;">Daytona International Speedway</span></a><span style="font-weight: 400;">. Here you can get all the information on all the cool events happening right across Daytona Bike Week 2023!</span></p>`,
        ],
      },
      {
        title: "Where to stay for Daytona Bike Week 2023",
        heading: "h1",
        isAck: false,
        id: "where_to_stay",
        descriptions: [
          `<p><span style="font-weight: 400;">If you want to take one of our Miami Motorcycle Rentals for a little longer then you’ll need somewhere to stop the night. Daytona Beach has a vast range of affordable accommodation to suit your style and budget. From family-friendly </span><a href="https://www.daytonabeach.com/places-to-stay/campgrounds/"><span style="font-weight: 400;">campgrounds</span></a><span style="font-weight: 400;"> to a </span><a href="https://www.airbnb.co.uk/daytona-beach-fl/stays"><span style="font-weight: 400;">Daytona Beach Airbnb</span></a><span style="font-weight: 400;">. For pure comfort why not rent a luxury oceanfront cottage? </span><a href="https://members.daytonachamber.com/Lodging-Travel-Tourism"><span style="font-weight: 400;">Book here now</span></a><span style="font-weight: 400;">. </span></p>`,
        ],
      },
      {
        title: "Where can I rent a motorcycle for Daytona Bike Week 2023?",
        heading: "h1",
        isAck: false,
        id: "where_can_i_rent",
        descriptions: [
          `<p><span style="font-weight: 400;">You can easily rent one of our top-branded motorcycles from us, at </span><a href="https://www.miamimotorcyclerentals.com/"><span style="font-weight: 400;">Miami Motorcycle Rentals</span></a><span style="font-weight: 400;">. We offer a great range of rides to suit everyone’s budget, taste, and riding level.&nbsp;</span></p>`,
          `<p><span style="font-weight: 400;">If you give us a call at </span><b>+1 305 803 1241</b><span style="font-weight: 400;"> or email </span><b>info@miamimotorcyclerentals.com</b><span style="font-weight: 400;"> and mention this blog post</span><span style="font-weight: 400;"> for </span><b>$25 off any rental</b><span style="font-weight: 400;"> during Daytona Bike Week 2023! </span></p>`,
          `<p><span style="font-weight: 400;">By appointment only. You can find us at </span><b>1222 NW 7th Ave, Miami, FL 33136</b><span style="font-weight: 400;">, just a 10-minute drive from Miami International Airport.&nbsp;</span></p>`,
        ],
      },
    ],
  },
];
