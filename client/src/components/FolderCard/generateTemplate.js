const generateTemplate = (title, createdAt, updatedAt, listData) => {
  const list = listData.map((item) => {
    if (item.status === "pending") {
      return `<li class="pending">${item.payload}</li>`;
    }
    return `<li class="completed">${item.payload}</li>`;
  });

  const start = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <style>
      body {
        font-family: "Segoe UI", Arial, Helvetica, Tahoma, Geneva, Verdana,
          sans-serif;
      }
      section {
        display: block;
      }
      .dates {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: auto;
        max-width: 800px;
        font-size: 0.9rem;
        line-height: 1.4rem;
        color: rgb(117, 117, 117);
      }
      .heading {
        text-align: center;
        font-size: 1.8rem;
        color: #0b2a80;
      }
      .todo-item {
        margin: auto;
        max-width: max-content;
        font-size: 1.3rem;
        line-height: 2rem;
        padding: 0 0 0 1rem;
      }
      .pending {
        color: #0b2a80;
      }
      .completed {
        color: #929596;
        text-decoration: line-through;
      }
      .no-item-found {
        text-align: center;
        font-size: 1.1rem;
      }
      @media (min-width: 768px) {
        .heading {
          font-size: 2rem;
        }
      }
    </style>
    </head>
    <body>
      <section>
        <div class="dates">
          <p>Created at <br />${createdAt}</p>
          <p>Updated at <br />${updatedAt}</p>
        </div>
        <h1 class="heading">${title}</h1>
        <ul class="todo-item">
  `;
  const end = `</ul>
  </section>
</body>
</html>`;
  if (!list.length) list.push('<p class="no-item-found">no item found !</p>');
  list.unshift(start);
  list.push(end);
  return list;
};

export default generateTemplate;
