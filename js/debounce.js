const inputRef = document.querySelector('.test-input');

function onInputChange(e) {
  console.log(e.target.value);
}

function debounce(fn, ms) {
  let timeout;
  return function () {
    const fnApply = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);

    timeout = setTimeout(fnApply, ms);
  };
}

// onInputChange = debounce(onInputChange, 1000);
inputRef.addEventListener('input', debounce(onInputChange, 1000));
