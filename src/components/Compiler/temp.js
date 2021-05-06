const JSCODE =
  `
//this is Node Js template

function greet(name) {
    console.log(\`Hello,\${name}!\`);
}
greet("world");
}
`.trim() + "\n";
const PYCODE =
  `
#this is python template
def greet(name):
    print(f"Hello,{name}!")
greet("!world")
`.trim() + "\n";
const CPPCODE =
  `
// This is C++ tenplate
#include <iostream>
void greet(std::string name) {
    std::cout << "Hello, " << name << "!";
}
int main() {
    greet("world");
    return 0;
}
`.trim() + "\n";
const RBCODE =
  `
# This is the Ruby template
def greet(name)
    puts "Hello, #{name}!"
end
greet('world')
`.trim() + "\n";

const LUACODE =
  `
-- This is the Lua template
function greet(name)
    print("Hello, " .. name .. "!")
end
greet("world")
`.trim() + "\n";
