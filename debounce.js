export function debounce(fn, wait) {
    let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => {
      return fn.apply(this,args)
    },wait)
  }
}

const demo = () => console.log("executed");
const debouncedDemo = debounce(demo,300)

debouncedDemo();
debouncedDemo();