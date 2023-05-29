```
java term end
```

UNIT 4

Q1) Summarize  the  need  for  swing  class,  class  hierarchy  and  its  features  with  example.  Compare  AWT  and swing. 

Ans)

The Swing library in Java serves as a powerful and flexible GUI (Graphical User Interface) toolkit, providing developers with a wide range of components, layouts, and features to create interactive and visually appealing applications.

Here's an overview of the need for Swing class hierarchy, its features, and a comparison with AWT:

**Need for Swing Class Hierarchy:**

AWT Limitations:
The AWT (Abstract Window Toolkit) provided a basic set of GUI components, but it had certain limitations in terms of customization, platform independence, and extensibility.

Enhanced Functionality:
Swing was developed to overcome these limitations and offer a more feature-rich and customizable GUI framework for Java applications.

Modern Look and Feel:
 Swing allows developers to create applications with a consistent and modern look across different platforms, thanks to its pluggable look and feel architecture.

Lightweight Components:
 Swing components are lightweight, meaning they are rendered in Java code rather than relying on native platform components, resulting in greater portability and consistent behavior.

**Swing Class Hierarchy and Features:**

Extensive Component Set:
Swing provides a wide range of components beyond AWT, including buttons, checkboxes, radio buttons, labels, text fields, text areas, tables, trees, menus, and more.

Layout Managers:
Swing offers various layout managers that allow precise positioning and arrangement of components within containers, ensuring flexibility across different screen sizes and resolutions.

Customization Options:
 Swing components are highly customizable, allowing developers to apply custom painting, create custom renderers, and modify visual aspects such as colors, fonts, and borders.

Event-Driven Programming:
 Swing follows an event-driven programming model, where user interactions or actions trigger events that can be handled by listeners, enabling the creation of interactive and responsive applications.

Pluggable Look and Feel:
 Swing's look and feel architecture allows developers to switch between different visual styles, such as the default Metal look and feel, Windows look and feel, or third-party look and feel implementations.

**Comparison with AWT:**

**Platform Independence:** 

Swing components are implemented entirely in Java, providing consistent behavior and appearance across different platforms. AWT components, on the other hand, rely on the underlying platform's native components, potentially resulting in platform-specific variations.

Customizability:
 Swing offers greater customization options, including custom painting, look and feel customization, and component styling. AWT has limited customization capabilities.

Feature Set:
 Swing provides a more extensive and advanced set of components compared to AWT. Swing includes additional components, layout managers, and features like double buffering, accessibility support, and improved event handling.

Performance:
 Due to its lightweight nature, Swing components generally offer better performance and responsiveness compared to AWT, especially in complex GUI scenarios.

In summary, Swing emerged as an improved alternative to AWT, addressing its limitations and providing a more versatile and feature-rich GUI framework. Swing's class hierarchy offers extensive components, layout managers, customization options, and event-driven programming, empowering developers to create modern and interactive Java applications.

<br>


>Unit 5

Q1) Describe the Life cycle of an Applet with diagram in details and its Hierarchy of Applet class. Write an 
applet program to display sum of two numbers with output.
