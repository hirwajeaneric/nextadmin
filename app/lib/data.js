import { Product, User } from "./models";
import { ConnectToDB } from "./utils";

export const fetchUsers = async (q) => {
    const regex = new RegExp(q, "i");

    try {
        ConnectToDB();
        const users = await User.find({ username: { $regex: regex } })
        // .select("-password");
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users");
    }
}

export const fetchUser = async (id) => {
    
    try {
        ConnectToDB();
        const user = await User.findById(id)
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user");
    }
}

export const fetchProduct = async (id) => {
    
    try {
        ConnectToDB();
        const product = await Product.findById(id)
        return product;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch product");
    }
}

export const fetchProducts = async (q) => {
    const regex = new RegExp(q, "i");

    try {
        ConnectToDB();
        const products = await Product.find({ title: { $regex: regex } })
        // .select("-password");
        return products;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products");
    }
}