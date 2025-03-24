"use client";
import { cn } from "../../lib/utils"; // Adjust if needed
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  // Load all images
  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = (err) => reject(err);
        });
      });

      try {
        const loaded = await Promise.all(loadPromises);
        setLoadedImages(loaded);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load images", err);
        setLoading(false);
      }
    };

    loadImages();
  }, [images]);

  // Autoplay logic
  useEffect(() => {
    if (!autoplay || loading) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, autoplay, loading]);

  // Key navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((prevIndex) =>
          prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
      } else if (event.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  const slideVariants = {
    initial: {
      scale: 0.95,
      opacity: 0,
      y: direction === "up" ? 50 : -50,
    },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      y: direction === "up" ? -50 : 50,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {/* Overlay */}
      {!loading && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {/* Image Slider */}
      {!loading && (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="absolute inset-0 w-full h-full object-cover object-center z-10"
          />
        </AnimatePresence>
      )}

      {/* Children Content */}
      <div className="absolute z-50 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};
