const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 w-full min-h-[430px] flex-grow">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Bienvenidos a VariedadesStef: Tu Ritual de Belleza
      </h1>
      <p className="text-sm md:text-lg text-center text-gray-600 max-w-2xl leading-relaxed">
        Donde la innovación y el cuidado capilar se unen para transformar tu rutina en una experiencia mágica.  
        <span className="block mt-2">🌟 Productos seleccionados con amor y calidad.</span>
        <span className="block">🌟 Resultados que elevan tu esencia.</span>
        <span className="block mt-2 font-semibold">✨ Descubre tu próximo favorito hoy. ✨</span>
      </p>
    </div>
  );
};

export default Dashboard;