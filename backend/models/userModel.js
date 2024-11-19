import mongoose from "mongoose";

let profile_imgs_name_list = [
  "Garfield", "Tinkerbell", "Annie", "Loki", "Cleo",
  "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear",
  "Bella", "Abby", "Harley", "Cali", "Leo", "Luna",
  "Jack", "Felix", "Kiki"
];

let profile_imgs_collections_list = [
  "notionists-neutral", "adventurer-neutral", "fun-emoji"
];

const userSchema = new mongoose.Schema(
  {
    personal_info: {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      fullname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
      },
      profile_img: {
        type: String,
        default: () => {
          const collection = profile_imgs_collections_list[
            Math.floor(Math.random() * profile_imgs_collections_list.length)
          ];
          const seed = profile_imgs_name_list[
            Math.floor(Math.random() * profile_imgs_name_list.length)
          ];
          return `https://api.dicebear.com/6.x/${collection}/svg?seed=${seed}`;
        },
      },
    },
    account_info: {
      invested_movies: {
        type: [String], // Changed from String to Array of Strings
        default: [], // Default is an empty array
      },
      liked_movies: {
        type: [String], // Changed from String to Array of Strings
        default: [], // Default is an empty array
      },
    },
    total_credits: {
      type: Number,
      default: 0,
    },
   
  },
  { timestamps: { createdAt: "joinedAt" } }
);

const User = mongoose.model("User", userSchema);

export default User;
