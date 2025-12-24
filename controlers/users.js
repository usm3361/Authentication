import fs from 'fs/promises'
import express from "express"

export const welcome = async (req, res, next) => {
  try {
    res.status(200).json({})
  } catch (err) {
    console.log(err);
  }
};
