const componentOption = {
    button: [
      {
        title: "Button Primary",
        image: "/assets/buttonV1.png",
        variant: "ButtonV1",
      },
      {
        title: "Button Secondary",
        image: "/assets/buttonV2.png",
        variant: "ButtonV2",
      },
      {
        title: "Button Tertiary",
        image: "/assets/buttonV3.png",
        variant: "ButtonV3",
      },
    ],
    header: [
      {
        title: "Header Primary",
        image: "/assets/headerV1.png",
        variant: "HeaderV1",
      },
      {
        title: "Header Secondary",
        image: "/assets/headerV2.png",
        variant: "HeaderV2",
      },
    ],
  } as const; 
  
  type ComponentOption = typeof componentOption;
  
  type ExtractVariants<T extends Record<string, Array<{ variant: string }>>> = {
    [K in keyof T]: T[K][number]["variant"];
  };
  
  type Variants = ExtractVariants<ComponentOption>;
  
  type ButtonVariants = Variants["button"]; // "ButtonV1" | "ButtonV2" | "ButtonV3"
  type HeaderVariants = Variants["header"]; // "HeaderV1" | "HeaderV2"