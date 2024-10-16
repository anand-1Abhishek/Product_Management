const {Product} = require('../models');
const { Op } = require('sequelize');

const createProduct = async(req, res) =>{
    try {
        const {name, price, description, category} = req.body;
        if(!name || !price || !category) {
            return res.status(400).json({
                error: "Name, Price and Category are required"
            });
        }
        const product = await Product.create({name, price,description, category});
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getProducts = async (req, res) => {
    try {
      const { page = 1, limit = 10, name, category } = req.query;
      const offset = (page - 1) * limit;
        
    
      const whereClause = {};
      if (name) {
        whereClause.name = { [Op.like]: `%${name}%` };
      }
      if (category) {
        whereClause.category = category;
      }

      const products = await Product.findAndCountAll({
        where: whereClause,
        limit: parseInt(limit),
        offset: parseInt(offset)
      });
  
      res.status(200).json({
        totalItems: products.count,
        totalPages: Math.ceil(products.count / limit),
        currentPage: parseInt(page),
        products: products.rows
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getProductById = async(req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if(!product) {
            return res.status(400).json({error: "Product not found."})
        }

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProduct = async(req, res) => {
    try {
        const {name, price, description, category } = req.body;
        const product = await Product.findByPk(req.params.id);
        if(!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.category = category || product.category;

        await product.save();
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found." });
      }
  
      await product.destroy();
      res.status(200).json({
        message: `Product with ID ${req.params.id} has been successfully deleted.`
      }); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}