![Angular](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png)

## Description
This is a dynamic side bar menu.


The component receive a list of objects with the following structure:

Example:

    [
      {
        id: "1",
        text: "Item1",
        action: undefined,
        icon: "home",
        menuFatherId: undefined,
      },
      {
        id: "2",
        text: "Item2",
        action: undefined,
        icon: "home",
        menuFatherId: undefined,
      }
    ]
    
    

If you wanted to add a child to an item, what you should do is modify the property "menuFatherId" of the child item and put the id of the father.

Example:

    [
      {
        id: "1",
        text: "Item1",
        action: undefined,
        icon: "home",
        menuFatherId: undefined,
      },
      {
        id: "2",
        text: "Item1.1",
        action: undefined,
        icon: "home",
        menuFatherId: "1",
      }
    ]
    

  

## Demo
Live demo [Here](https://codesandbox.io/s/adoring-platform-jtl4v).



