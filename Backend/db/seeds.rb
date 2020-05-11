User.destroy_all
Good.destroy_all

# Users
User.create(
    username: 'test',
    password: 'test'
)

# Food
Good.create(
    name: 'Blue Buffalo Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food',
    description: 'Great Dog Food that is Skylord-Approved. This food is made with Chicken and Brown Rice. Enjoy!',
    price: 49.98,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/71hs9GihZUL._AC_SY606_.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/5150022_alt3.jpeg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/5066963_alt4.jpeg',
    product_type: 'Food'
)

Good.create(
    name: 'Taste of the Wild High Prairie Grain-Free Dry Dog Food',
    description: 'Skylord-Approved food that comes from the wild! This is made with NO grain and is from the High Prarie. Enjoy!',
    price: 48.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/taste_of_the_wild_high_prairie_roasted_bison__25492.1521571508.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/49064_PT3._AC_SL320_V1587650476_.jpg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/Taste-of-the-Wild-High-Prairie-Canine-Recipe-with-Roasted-Bison-and-Roasted-Venison-Grain-Free-Dry-Dog-Food-28-Lb-P2.jpeg',
    product_type: 'Food'
)

Good.create(
    name: 'Purina Pro Plan Focus Adult Sensitive Skin & Stomach Salmon & Rice Formula Dry Dog Food',
    description: 'Does your dog have a sensitive stomach? Do they constantly feel sick? Well look no futher, Skylord-Approved Purina Pro Plan food is now here
    and does not hurt dog stomachs. Enjoy!',
    price: 47.98,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/81ohh0jt2qL._AC_SL1500_.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/5266806_alt2.jpeg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/2986221-center-5.webp',
    product_type: 'Food'
)

Good.create(
    name: 'Blue Buffalo Homestyle Recipe Chicken Dinner with Garden Vegetables & Brown Rice Canned Dog Food, 12.5-oz, case of 12',
    description: 'Is your dog a wild animal? Well then you have to try the Skylord-Approved Chicken Dinner with Garden Vegetables and Brown Rice food!
    It has all of the antioxitants that your dog needs to thrive. Enjoy!',
    price: 18.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/84158_MAIN._AC_SL1500_V1572895457_.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/64620_PT8._AC_SL1500_V1499959911_.jpg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/download.jpeg',
    product_type: 'Food'
)

# Toys
Good.create(
    name: 'KONG Classic Dog Toy',
    description: 'Everyone Loves Kong! Skylord-Approved toy that will not break the bank. Enjoy!',
    price: 12.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/46191-DEFAULT-l.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/images.jpeg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/HTB1cLo3cAxz61VjSZFrq6xeLFXad.webp',
    product_type: 'Toy'
)

Good.create(
    name: 'Dog Toy Rope',
    description: 'Every dog loves their rope! They will put up a good challenge in tug-a-war with this Skylord-Approved rope. Enjoy!',
    price: 9.50,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/71bi%2Bf3pa9L._AC_SX425_.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/61aDgnzssFL._AC_SL1001_.jpg',
    detail_image2: nil,
    product_type: 'Toy'
)

Good.create(
    name: 'Mr. Bear Dog Toy',
    description: 'What dog does not want to battle and tear up Mr.Bear? This Skylord-Approved one-of-a-kind Mr.Bear is one that your dog will love for years. Enjoy!',
    price: 17.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/147061_Main._AC_SL1500_V1539205713_.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/1586211-center-1.webp',
    detail_image2: nil,
    product_type: 'Toy'
)

Good.create(
    name: 'Skylord-Approved Tennis Ball',
    description: 'This Skylord-Approved Tennis Ball will blow your dogs mind. It has been created by hand and is GIANT! Enjoy!',
    price: 39.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/61YFAdLoQdL._AC_SX425_.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/61rRJN7MMuL._AC_UX569_.jpg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/giant-tennis-ball-300x250.jpg',
    product_type: 'Toy'
)

# Treats
Good.create(
    name: 'Skylord Giant Cake',
    description: 'This dog cake will surprise and blow any dog away. It is HUGE and it is grainfree and very healthy and tasty. Enjoy the masterpiece of Skylord!',
    price: 25.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/Pup-Bday51.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/18a086f2004b22099b513083d8bf5824.jpg',
    detail_image2: nil,
    product_type: 'Treat'
)

Good.create(
    name: 'Skylord Crazy Carrot Cake',
    description: 'This Crazy Carrot Cake will blow all carrot-loving dogs away. It is made-to-order and is barknominal. Enjoy!',
    price: 18.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/unnamed.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/00764a34-dogcarrotcakepng',
    detail_image2: nil,
    product_type: 'Treat'
)

Good.create(
    name: 'Skylord-Approved Doughnuts',
    description: 'Are you barking for doughnuts? If so you are in the right place. Come enjoy some Skylord-Approved Doughnuts!',
    price: 11.99,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/finished-dog-donuts-square.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/tumblr_p9oc7bShgL1xnqe5bo7_500.jpg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/tumblr_static_tumblr_static_6n6npms2m884kogswskgkgowc_1280.jpg',
    product_type: 'Treat'
)

Good.create(
    name: 'Skylord-Approved Giant Bones',
    description: "Let's be real... Your dog is going to take this bone and bury it and keep it forever. Every dog loves the Skylord-Approved Giant Bones!",
    price: 21.26,
    card_image: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/mammoth-the-biggest-dog-bones-by-pawstruck-on-pawstruckcom-17185451.jpg',
    detail_image1: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/540747396_344cde9fda_o-960x540.jpg',
    detail_image2: 'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/download+(1).jpeg',
    product_type: 'Treat'
)