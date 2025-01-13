import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Card = React.forwardRef(
  (
    {
      children,
      className,
      interactive = false,
      gradient = false,
      hoverScale = true,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg",
          gradient &&
            "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
          interactive && "cursor-pointer",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={
          hoverScale
            ? {
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }
            : undefined
        }
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

// Project card variant with image and hover effects
export const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  link,
  className,
  ...props
}) => {
  return (
    <Card
      interactive
      className={cn("overflow-hidden group", className)}
      {...props}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded-lg border-2 hover:bg-white hover:text-black transition-colors"
            >
              View Project
            </a>
          </motion.div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            className="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </Card>
  );
};

// Skill card variant
export const SkillCard = ({
  icon: Icon,
  title,
  level,
  className,
  ...props
}) => {
  return (
    <Card className={cn("text-center", className)} {...props}>
      <motion.div
        className="mb-4 mx-auto"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {Icon && <Icon className="w-12 h-12 text-blue-600" />}
      </motion.div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </Card>
  );
};

Card.displayName = "Card";
ProjectCard.displayName = "ProjectCard";
SkillCard.displayName = "SkillCard";

export default Card;
