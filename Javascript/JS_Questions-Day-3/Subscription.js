function transformRoutes(routes, subscriptions) {
    const subMap = new Map(); //creating map to check subscribed module
  
    // Subscription mapping
    subscriptions.forEach(sub => {
        subMap.set(sub.name, sub.isSub);
        if (sub.subMod) {
            sub.subMod.forEach(s => subMap.set(s.name, s.isSub));
        }
    });

    console.log("adfasfasfd___asdfadsf",subMap);
    let firstSubscribed = null;//store the first subscribed module so that we can add property "redirectTo"
    
    function processRoute(route) {
        let isSubscribed = subMap.get(route.name) || false;//checking route is subscribed or not
        
        if (!firstSubscribed && isSubscribed) {
            firstSubscribed = route.name;
        }

        if (route.subComp) {
            if (!isSubscribed) {
                return { name: route.name, subComp: route.subComp.map(s => ({ name: s.name, comp: "UN" })) };
            } else {
                return { 
                    name: route.name, 
                    subComp: route.subComp.map(processRoute) 
                };
            }
        } else {
            return { name: route.name, comp: isSubscribed ? route.comp : "UN" };
        }
    }

    const updatedRoutes = routes.map(processRoute);

    // Add redirect-to in the beginning
    if (firstSubscribed) {
        updatedRoutes.unshift({ redirectTo: firstSubscribed });
    }

    return updatedRoutes;
}
const routes = [
    {
      name: 'M1',
      comp: 'C1',
    },
    {
      name: 'M2',
      comp: 'C2',
    },
    {
      name: 'M3',
      subComp: [
        {
          name: 'M3A',
          comp: 'C3A',
        },
        {
          name: 'M3B',
          comp: 'C3B',
        },
      ],
    },
    {
      name: 'M4',
      subComp: [
        {
          name: 'M4A',
          comp: 'C4A',
        },
        {
          name: 'M4B',
          comp: 'C4B',
        },
      ],
    },
    {
      name: 'M5',
      subComp: [
        {
          name: 'M5A',
          comp: 'C5A',
        },
        {
          name: 'M5B',
          subComp: [
            {
              name: 'M5BA',
              comp: 'C5BA',
            },
            {
              name: 'M5BB',
              comp: 'C5BB',
            },
            {
              name: 'M5BC',
              comp: 'C5BC',
            },
          ],
        },
        {
          name: 'M5C',
          comp: 'C5C',
        },
      ],
    },
  ];
  
  const subscription = [
    {
      name: 'M1',
      isSub: true,//first subscribed module
    },
    {
      name: 'M2',
      isSub: false,
    },
    {
      name: 'M3',
      isSub: false,
      subMod: [
        {
          name: 'M3A',
          isSub: true,
        },
        {
          name: 'M3B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M4',
      isSub: true,
      subMod: [
        {
          name: 'M4A',
          isSub: false,
        },
        {
          name: 'M4B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M5',
      isSub: true,
      subMod: [
        {
          name: 'M5A',
          isSub: false,
        },
        {
          name: 'M5B',
          isSub: true,
  
          subComp: [
            {
              name: 'M5BA',
              isSub: false,
            },
            {
              name: 'M5BB',
              isSub: true,
            },
            {
              name: 'M5BC',
              isSub: false,
            },
          ],
        },
        {
          name: 'M5C',
          isSub: true,
        },
      ],
    },
  ];
const updatedRoutes = transformRoutes(routes, subscription);
console.log(JSON.stringify(updatedRoutes, null, 2));
