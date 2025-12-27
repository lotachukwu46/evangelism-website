interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
}: ProjectProps) {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <button className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2">
            Learn More
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <div className="h-8 w-px bg-gray-100" />
          <button className="text-sm font-bold text-blue-600">Support</button>
        </div>
      </div>
    </div>
  );
}
