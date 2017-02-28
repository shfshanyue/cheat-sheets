h1= title
a(href=url) url
each collection in collections
    h2= collection.title
    each item in collection.commands
      h3= item.title
      .
        ``` sh
        !{item.command}
        ```
