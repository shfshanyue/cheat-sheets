h1.subject= title
each collection in collections
    h2= collection.title
    each item in collection.commands
      h4= item.title
      .
        ``` sh
        #{item.command}
        ```
