export interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  servers: {
    name: string;
    url: string;
  }[];
  genre: string[];
  year: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Cosmic Journey",
    description: "A space explorer discovers a mysterious planet with unexpected life forms.",
    thumbnail: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    servers: [
      { name: "Server 1", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      { name: "Server 2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" },
      { name: "Server 3", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4" }
    ],
    genre: ["Sci-Fi", "Adventure"],
    year: 2023
  },
  {
    id: 2,
    title: "Urban Legends",
    description: "A group of friends discover that the urban legends of their hometown are becoming reality.",
    thumbnail: "https://images.pexels.com/photos/1612462/pexels-photo-1612462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    servers: [
      { name: "Server 1", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      { name: "Server 2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" }
    ],
    genre: ["Horror", "Mystery"],
    year: 2022
  },
  {
    id: 3,
    title: "The Last Journey",
    description: "An elderly man goes on one final journey to reconnect with his past.",
    thumbnail: "https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    servers: [
      { name: "Server 1", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      { name: "Server 2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" },
      { name: "Server 3", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4" }
    ],
    genre: ["Drama", "Adventure"],
    year: 2023
  },
  {
    id: 4,
    title: "Enchanted Forest",
    description: "A young girl discovers a magical forest behind her new home.",
    thumbnail: "https://images.pexels.com/photos/10884016/pexels-photo-10884016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    servers: [
      { name: "Server 1", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      { name: "Server 2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" }
    ],
    genre: ["Fantasy", "Family"],
    year: 2021
  },
  {
    id: 5,
    title: "Cybernetic Revolution",
    description: "In a future where humans and AI coexist, a detective uncovers a conspiracy.",
    thumbnail: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    servers: [
      { name: "Server 1", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      { name: "Server 2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" },
      { name: "Server 3", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4" }
    ],
    genre: ["Sci-Fi", "Thriller"],
    year: 2024
  },
  {
    id: 6,
    title: "Desert Mirage",
    description: "A treasure hunter gets lost in the desert and begins to see strange apparitions.",
    thumbnail: "https://images.pexels.com/photos/1698485/pexels-photo-1698485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    servers: [
      { name: "Server 1", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      { name: "Server 2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" }
    ],
    genre: ["Adventure", "Mystery"],
    year: 2023
  }
];