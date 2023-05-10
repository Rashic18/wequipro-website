// Example data for demonstration

const newsData = [
  {
    title: "New Manufacturing Process Increases Efficiency",
    description: `<p>A new manufacturing process has been developed that promises to revolutionize the industry by increasing efficiency and reducing costs. The process, which was recently tested in a factory in Germany, involves a combination of automation and data analytics to optimize production lines and reduce waste.</p><p>

The new process involves the use of advanced sensors and data analytics to monitor the production line in real-time. The data is then analyzed to identify bottlenecks and inefficiencies, which can be addressed using automation and other optimization techniques. By optimizing the production line in this way, the new process is able to reduce waste and increase output, resulting in significant cost savings.</p><p>

One of the key benefits of the new process is that it allows for real-time adjustments to the production line. This means that if a bottleneck or inefficiency is identified, it can be addressed immediately, without the need for time-consuming manual analysis. This results in faster production times and reduced downtime, which ultimately leads to increased efficiency and productivity.</p><p>

The new manufacturing process has already been implemented in several factories around the world, with impressive results. In one factory in Japan, for example, the new process led to a 20% reduction in waste and a 15% increase in output, resulting in a significant increase in profits. </p><p>

The new manufacturing process is also environmentally friendly, as it reduces waste and energy consumption. By optimizing the production line and reducing waste, the new process is able to minimize the environmental impact of manufacturing, making it a more sustainable solution for the future.</p><p>

The new manufacturing process that increases efficiency is a game-changer for the industry. By combining automation and data analytics, the process is able to optimize production lines and reduce waste, resulting in significant cost savings and increased efficiency. As more factories adopt this new process, we can expect to see a more sustainable and efficient manufacturing industry.</p><p>`,
    date: "May 8, 2023",
    category: "Manufacturing"
  },
  {
    title: "Automation Trends in Factories",
    description: `Automation has been transforming the manufacturing industry for years, and the trend shows no signs of slowing down. As technology continues to advance, more and more factories are adopting automated solutions to improve efficiency, reduce costs, and stay competitive.

One of the biggest trends in factory automation is the use of collaborative robots, or "cobots". Unlike traditional industrial robots, which are designed to work independently, cobots are designed to work alongside human workers. This makes them ideal for tasks that require precision and repeatability, while also allowing human workers to focus on tasks that require creativity and problem-solving skills.

Another trend in factory automation is the use of artificial intelligence (AI) and machine learning. By analyzing data from sensors and other sources, AI and machine learning algorithms can identify patterns and anomalies in production processes, which can be used to optimize efficiency and reduce waste. For example, an AI system might be used to predict when a machine is likely to fail, allowing maintenance to be performed before a breakdown occurs.

IoT (Internet of Things) technology is also playing an increasingly important role in factory automation. By connecting machines and sensors to the internet, factory managers can monitor production processes in real-time, allowing for better decision-making and more efficient production. For example, if a sensor detects a problem with a machine, an alert can be sent to the maintenance team, allowing them to quickly address the issue.

Another trend in factory automation is the use of 3D printing. While 3D printing has been around for several years, it is now being used in more and more factories as a way to create customized parts and prototypes quickly and cost-effectively. By using 3D printing, factories can reduce lead times and eliminate the need for expensive tooling, making it an attractive solution for many manufacturing applications.

In conclusion, automation is transforming the manufacturing industry, and the trends discussed here are just a few examples of how technology is changing the way factories operate. As factories continue to adopt new automated solutions, we can expect to see increased efficiency, reduced costs, and a more competitive manufacturing industry. By staying ahead of these automation trends, factories can position themselves for success in the years to come.`,
    date: "May 7, 2023",
    category: "Automation"
  }
];

const articleData = [
  {
    title: "The Benefits of Using Automated Manufacturing Systems",
    description: `Automated manufacturing systems have revolutionized the way that factories operate, providing a wide range of benefits that make them essential to modern production processes. By using automated systems to handle tasks that were once done manually, factories can improve efficiency, reduce costs, and improve product quality.

One of the biggest benefits of using automated manufacturing systems is increased efficiency. Automated systems can work 24/7 without the need for breaks or rest, allowing factories to produce goods at a faster rate. This can result in increased output, reduced lead times, and greater productivity. Additionally, automated systems are able to perform tasks with greater precision and accuracy than human workers, reducing the likelihood of errors and defects.

Another benefit of automated manufacturing systems is cost reduction. While the initial investment in automated systems can be high, the long-term cost savings are significant. By reducing the need for manual labor and increasing efficiency, automated systems can lower labor costs and reduce waste. Additionally, automated systems are able to perform tasks with greater consistency and accuracy, which can result in less material waste and lower scrap rates.

Automated systems can also improve product quality by reducing the likelihood of errors and defects. By performing tasks with greater precision and accuracy, automated systems can ensure that products meet strict quality standards. This can result in fewer product returns, less waste, and greater customer satisfaction.

Furthermore, automated systems can improve worker safety by handling dangerous or repetitive tasks. By removing workers from these types of tasks, factories can reduce the risk of workplace accidents and injuries. This can result in a safer work environment for employees and lower insurance costs for the company.

In conclusion, automated manufacturing systems provide a wide range of benefits that make them essential to modern production processes. By increasing efficiency, reducing costs, improving product quality, and enhancing worker safety, automated systems are able to help factories stay competitive in a rapidly evolving market. As technology continues to advance, we can expect to see even more benefits from automated manufacturing systems in the years to come.`,
    date: "May 6, 2023",
    category: "Manufacturing"
  },
  {
    title: "How to Improve Production Efficiency in Your Factory",
    description: `Improving production efficiency is a key goal for any factory, regardless of industry or size. By reducing waste, improving processes, and streamlining operations, factories can produce goods more quickly and effectively, ultimately leading to greater profits and a competitive edge in the market. In this article, we'll explore some tips and strategies for improving production efficiency in your factory.

Implement lean manufacturing principles
Lean manufacturing is a system of principles and methods that are designed to eliminate waste and improve efficiency. By implementing lean manufacturing principles in your factory, you can streamline processes, reduce lead times, and improve quality. Some key elements of lean manufacturing include continuous improvement, value stream mapping, and just-in-time inventory management.

Use automation
Automated systems can improve efficiency by performing tasks that were once done manually, allowing factories to produce goods at a faster rate. Automated systems are able to work 24/7 without the need for breaks or rest, allowing for increased output and productivity. Additionally, automated systems are able to perform tasks with greater precision and accuracy, reducing the likelihood of errors and defects.

Optimize workflows
Optimizing workflows involves analyzing the steps in your production process and identifying areas for improvement. By eliminating unnecessary steps and reducing bottlenecks, you can improve efficiency and reduce lead times. One way to optimize workflows is to use value stream mapping, which involves mapping out the steps in your production process and identifying areas for improvement.

Invest in employee training
Well-trained employees are essential to improving production efficiency. By investing in employee training, you can ensure that your workers have the skills and knowledge they need to perform their jobs effectively. Additionally, by involving employees in the improvement process, you can tap into their expertise and insights, leading to even greater improvements in efficiency.

Measure and analyze performance
Measuring and analyzing performance is essential to improving production efficiency. By tracking key metrics such as cycle time, lead time, and defect rate, you can identify areas for improvement and track the impact of changes you make to your production processes. Additionally, by analyzing performance data over time, you can identify trends and patterns, allowing you to make more informed decisions about how to improve efficiency.`,
    date: "May 5, 2023",
    category: "Production"
  }
];


window.onload = function() {
  // Insert the first news description into the HTML
  const newsElement = document.getElementById('news-description');
  if (newsElement) {
    newsElement.innerHTML = newsData[0].description;
  }

  // Insert the first article description into the HTML
  const articleElement = document.getElementById('article-description');
  if (articleElement) {
    articleElement.innerHTML = articleData[0].description;
  }
};

const statsData = {
  factories: 125,
  employees: 23750,
  products: 3200
};

// Select the news container
const newsContainer = document.querySelector("#news-list");

// Create a news card for each news item and add it to the news container
newsData.forEach(newsItem => {
  const newsCard = createCard(newsItem, "news-card");
  newsContainer.appendChild(newsCard);
});

// Select the article container
const articleContainer = document.querySelector("#article-list");

// Create an article card for each article and add it to the article container
articleData.forEach(articleItem => {
  const articleCard = createCard(articleItem, "article-card");
  articleContainer.appendChild(articleCard);
});

// Select the stats container
const statsContainer = document.querySelector("#stats");

// Create a stats card and add it to the stats container
const statsCard = document.createElement("div");
statsCard.classList.add("stats-card");

const factories = document.createElement("p");
factories.textContent = `Factories: ${statsData.factories}`;

const employees = document.createElement("p");
employees.textContent = `Employees: ${statsData.employees}`;

const products = document.createElement("p");
products.textContent = `Products: ${statsData.products}`;

statsCard.appendChild(factories);
statsCard.appendChild(employees);
statsCard.appendChild(products);
statsContainer.appendChild(statsCard);

// Helper function to create a card
function createCard(data, className) {
  const card = document.createElement("div");
  card.classList.add(className);

  const title = document.createElement("h3");
  title.textContent = data.title;

  const description = document.createElement("p");
  description.textContent = data.description;

  const date = document.createElement("p");
  date.textContent = data.date;

  const category = document.createElement("p");
  category.textContent = data.category;

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(date);
  card.appendChild(category);

  return card;
}

// Add a featured content item
const featuredData = {
  title: "The Future of Automation in Manufacturing",
  description: `Automation in manufacturing is expected to continue growing, with innovative technologies being introduced regularly. The future of automation includes advancements in collaborative robots, artificial intelligence, IoT, and 3D printing. As more companies embrace automation, factories will become more efficient, cost-effective, and environmentally friendly.`,
  date: "May 9, 2023",
  category: "Featured"
};

// Select the featured container
const featuredContainer = document.querySelector("#featured-content");

// Create a featured card and add it to the featured container
const featuredCard = createCard(featuredData, "featured-card");
featuredContainer.appendChild(featuredCard);

// Add categories data
const categoriesData = [
  "Manufacturing",
  "Automation",
  "Production",
  "Industry Trends",
  "Environment",
  "Innovation"
];

// Select the categories container
const categoriesContainer = document.querySelector("#categories");

// Create a category item for each category and add it to the categories container
categoriesData.forEach(categoryItem => {
  const categoryElement = document.createElement("li");
  categoryElement.textContent = categoryItem;
  categoriesContainer.appendChild(categoryElement);
});

// Add social media links data
const socialMediaData = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/YourPage",
    icon: "fab fa-facebook-f"
  },
  {
    platform: "Twitter",
    url: "https://www.twitter.com/YourPage",
    icon: "fab fa-twitter"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/YourPage",
    icon: "fab fa-linkedin-in"
  }
];

// Select the social media container
const socialMediaContainer = document.querySelector("#social-media");

// Create a social media link for each platform and add it to the social media container
socialMediaData.forEach(socialMediaItem => {
  const socialMediaLink = document.createElement("a");
  socialMediaLink.href = socialMediaItem.url;
  socialMediaLink.title = socialMediaItem.platform;
  socialMediaLink.innerHTML = `<i class="${socialMediaItem.icon}"></i>`;
  socialMediaContainer.appendChild(socialMediaLink);
});
