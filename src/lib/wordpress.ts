const WORDPRESS_API_URL = "https://betaviet.vn/wp-json/wp/v2";

export interface Project {
  id: number;
  title: string;
  code: string;
  image: string;
  avatar: string;
}

export async function fetchProjects(
  type: "architecture" | "interior" | "construction",
): Promise<Project[]> {
  try {
    const categoryId = {
      architecture: 15,
      interior: 16,
      construction: 17, // Add the correct category ID for construction projects
    }[type];

    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?categories=${categoryId}&_embed`,
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const posts = await response.json();

    return posts.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      code: post.acf?.project_code || "",
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + post.id,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
