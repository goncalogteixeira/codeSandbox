export default function TopNavigation(items){
    var itemsMenu = items.items.map((item) =>   <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/ampPage">{item.name}</a>)
    return(<nav class="bg-white shadow">
    <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div>
          <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">CSantos</a>
        </div>
  
        <div class="flex md:hidden">
          <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
Right Button
          </button>
        </div>
      </div>
  
      <div class="md:flex items-center">
        <div class="flex flex-col md:flex-row md:mx-6">
       {itemsMenu}
        </div>
  
        
      </div>
    </div>
  </nav>);
}