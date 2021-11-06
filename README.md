# macoda-mattress

This repsitory contains the code for the [Macoda Mattress](https://macoda.com.au/products/macoda-mattress) product. It shows the customizability of the product with three different configurations.

## Demo page

Demo page is available at: [https://macoda-mattress.vercel.app](https://macoda-mattress.vercel.app)

## Mattress parts
Thick insert is made up of two parts:
1. Latex white coloured foam
2. Gel Infused blue coloured Memory foam

Thin insert is a High Density Support Foam. Refer to link above for more details.

## Pages for customisation
Three possible configurations are listed below with the order of pages indicated. The first page is the mattress with the cover on.
1. **Mattress with cover**
2. **Medium**: Mattress arrives in medium, with Premium Latex on top (thick blue).
3. **Soft**: Gel Infused Memory Foam (thick white) on top.
4. **Firm**: High Density Support Foam on top (thin insert).

## Design criteria
- interactive animation, click a button, or scroll for interaction
- show the user how the product changes and how it works
- product can be seen in 3D as opposed to a simple video
- very fast load and interaction performance, easy to use on desktop and mobile
- will be added in the "Customisable to Suit You" section of this page: https://macoda.com.au/products/macoda-mattress

## Implementation details:
- gather photographic reference of the Macoda mattress
- create 3D model of the product as visually accurately as possible, model the handles and inner layers
- create a keyframed animation of the customization action / flipping of the layers and the putting on the cover
- create a ray-traced 3d render of the mattress and export it as a scollable animation
- write code in HTML, Javascript and ThreeJS to render the mattress in a web component and add interactivity with buttons and scrolling
- deploy the web component to static hosting so that you can embed it easily on the site using an iframe HTML element.

