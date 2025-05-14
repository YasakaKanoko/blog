# <samp>C</samp>

## <samp>版本</samp>

1. <samp>K＆R C</samp>

   <samp>C 语言原始版本</samp>

2. <samp>ANSI C ( 又称 C89 或 C90 )</samp>

   <samp>1989年，美国国家标准协会 ( ANSI ) 制定了一套 C 语言标准</samp>

   <samp>1990年，国际标准化组织 ( ISO ) 通过了这个标准。它被称为 "ANSI C"，也可以按照发布年份，称为 "C89" 或 "C90"</samp>

3. <samp>C95</samp>

   <samp>1995年，美国国家标准协会对 1989 年标准进行了补充，加入多字节字符和宽字符的支持。这个版本称为 "C95"</samp>

4. <samp>C99</samp>

   <samp>1999年，C 语言标准的第一次大型修订，增加了许多语言特性，比如双斜杠 ( `//` ) 的注释语法。这个版本称为 "C99"</samp>

   <samp>目前最流行的版本</samp>

5. <samp>C11</samp>

   <samp>2011年，标准化组织再一次对 C 语言进行修订，增加了 Unicode 和多线程的支持</samp>

6. <samp>C17</samp>

   <samp>2017年，C11 进行了修补；发布于2018年，这个版本称为 "C17"</samp>

   <samp>解决了 C11 的一些缺陷，没有引入任何新功能</samp>

7. <samp>C2x</samp>

   <samp>正在起草中</samp>

## <samp>编译</samp>

<samp>C 语言是一种编译型语言，源码都是文本文件，本身无法执行。必须通过编译器生成二进制的可执行文件才能执行</samp>

<samp>编译器将代码从文本翻译成二进制指令的过程，就称为编译阶段，又称为"编译时" (compile time)，跟运行阶段(又称为"运行时")相区分</samp>

1. <samp>在 Windows 系统中安装 [MinGW](https://github.com/niXman/mingw-builds-binaries/releases)</samp>

2. <samp><b>环境变量</b></samp>

   | `Path` | `D:\mingw64\bin` |
   | ------ | ---------------- |


3. <samp>验证</samp>

   ```sh
   gcc -v
   
   # gcc version 14.2.0 (MinGW-W64 x86_64-ucrt-posix-seh, built by Brecht Sanders, r3)
   ```

4. <samp>Hello World!</samp>

   <samp>编译运行：当执行该命令是时，会将源文件编译为二进制代码，生成的编译产物 `a.exe` (Linux 是 `a.out`，assembler output 缩写)</samp>

   ```sh
   gcc index.c
   
   ./a.out
   ```



   ::: code-group

   ```c[index.c]
   #include <stdio.h>
   
   int main(void) {
   	printf("Hello World!");
   	return 0;
   }
   ```

   ```sh
   Hello World!
   ```

   :::

<samp>`gcc` 参数</samp>

- <samp>`-o`：指定编译产物的文件名</samp>

  ```sh
  # 编译产物的文件名为hello
  gcc -o hello hello.c
  ```

- <samp>`-std=`：指定编译的 C 语言标准</samp>

  ```sh
  # 表示按照C99进行编译
  gcc -std=c99 hello.c
  ```

## <samp>语法</samp>

<samp>**注释**</samp>

- `// 单行注释`
- `/* 多行注释 */`

> [!NOTE]
>
> <samp>双引号内的注释符号会被视为普通字符，失去注释作用</samp>
>
> <samp>编译时，引号内的注释内容会被视作一个空格，如：`min/* space */Value` 会编译为 `min Value`，而非 `minValue`</samp>

<samp><b>`printf()`</b></samp>

<samp>`printf()`：将参数文本输出到控制台；`f` 表示 format (格式化)</samp>

- <samp>文本内部的换行通过 `\n` 实现</samp>

- <samp>`printf()` 是在标准库的头文件 `stdio.h` 定义的</samp>

<samp>**占位符**</samp>

::: code-group

```c
printf("%s says it is %i o'clock\n", "Ben", 21);
```

```sh
Ben says it is 21 o'clock
```

:::

<samp>如果有 `n` 个占位符，`printf()` 的参数有 `n + 1` 个。如果参数个数少于对应的占位符，`printf()` 可能会输出内存中的任意值</samp>

- <samp>`%a`：十六进制浮点数，字母输出为小写</samp>
- <samp>`%A`：十六进制浮点数，字母输出为大写</samp>
- <samp>`%c`：字符</samp>
- <samp>`%d`：十进制整数</samp>
- <samp>`%e`：使用科学计数法的浮点数，指数部分的 `e` 为小写</samp>
- <samp>`%E`：使用科学计数法的浮点数，指数部分的 `E` 为大写</samp>
- <samp>`%i`：整数，基本等同于 `%d`</samp>
- <samp>`%f`：小数(包含 `float` 类型和 `double` 类型)</samp>
- <samp>`%g`：6 个有效数字的浮点数。整数部分一旦超过 6 位，就会自动转为科学计数法，指数部分的 `e` 为小写</samp>
- <samp>`%G`：等同于 `%g`，唯一的区别是指数部分的 `E` 为大写</samp>
- <samp>`%hd`：十进制 short int 类型</samp>
- <samp>`%ho`：八进制 short int 类型</samp>
- <samp>`%hx`：十六进制 short int 类型</samp>
- <samp>`%hu`：unsigned short int 类型</samp>
- <samp>`%ld`：十进制 long int 类型</samp>
- <samp>`%lo`：八进制 long int 类型</samp>
- <samp>`%lx`：十六进制 long int 类型</samp>
- <samp>`%lu`：unsigned long int 类型</samp>
- <samp>`%lld`：十进制 long long int 类型</samp>
- <samp>`%llo`：八进制 long long int 类型</samp>
- <samp>`%llx`：十六进制 long long int 类型</samp>
- <samp>`%llu`：unsigned long long int 类型</samp>
- <samp>`%Le`：科学计数法表示的 long double 类型浮点数</samp>
- <samp>`%Lf`：long double 类型浮点数</samp>
- <samp>`%n`：已输出的字符串数量。该占位符本身不输出，只将值存储在指定变量之中</samp>
- <samp>`%o`：八进制整数</samp>
- <samp>`%p`：指针</samp>
- <samp>`%s`：字符串</samp>
- <samp>`%u`：无符号整数 ( unsigned int )</samp>
- <samp>`%x`：十六进制整数</samp>
- <samp>`%zd`：`size_t`类型</samp>
- <samp>`%%`：输出一个百分号</samp>

<samp>**输出格式**</samp>

- <samp>限定宽度</samp>

  <samp>`printf()` 允许限定占位符最小宽度</samp>

  ```c
  printf("%5d\n", 123); // 输出为 "  123"
  ```

  <samp>`%5d` 表示这个占位符的宽度至少为 5 位。如果不满 5 位，对应的值的前面会添加空格</samp>

  <samp>输出的值默认是右对齐，即输出内容前面会有空格；如果希望改成左对齐，在输出内容后面添加空格，可以在占位符的 `%` 的后面插入一个 `-` 号</samp>

  ```c
  printf("%-5d\n", 123); // 输出为 "123  "
  ```

  <samp>对于小数，这个限定符会限制所有数字的最小显示宽度</samp>

  ```c
  // 输出 "  123.450000"
  printf("%12f\n", 123.45);
  ```

  <samp>`%12f` 表示输出的浮点数最少要占据 12 位。由于小数的默认显示精度是小数点后 6 位，所以 `123.45` 输出结果的头部会添加2 个空格</samp>

- <samp>总是显示正负号</samp>

  <samp>`printf()` 不对正数显示 `+` 号，只对负数显示 `-` 号。如果想让正数也输出 `+` 号，可以在占位符的 `%` 后面加一个 `+`</samp>

  ```c
  printf("%+d\n", 12); // 输出 +12
  printf("%+d\n", -12); // 输出 -12
  ```

  <samp>`%+d` 可以确保输出的数值，总是带有正负号</samp>

- <samp>限定小数位数</samp>

  <samp>输出小数时，希望限定小数的位数</samp>

  ```c
  printf("Number is %.2f\n", 0.5); // 输出 Number is 0.50
  ```

  <samp>`%.2f` 表示只保留两位小数</samp>

  <samp>配合限定宽度占位符使用</samp>

  ```c
  printf("%6.2f\n", 0.5); // 输出为 "  0.50"
  ```

  <samp>`*` 可以作为 `printf()` 参数传入</samp>

  ```c
  printf("%*.*f\n", 6, 2, 0.5);
  
  // 等同于
  printf("%6.2f\n", 0.5);
  ```

- <samp>输出部分字符串</samp>

  <samp>`%s` 默认将输出字符串全部输出，如果指向输出开头，使用 `%.<m>s` 指定输出的长度，`m` 表示数字</samp>

  ```c
  printf("%.5s\n", "hello world"); // 输出 hello
  ```

## <samp>标准库，头文件</samp>

<samp>C 语言自带的功能，称为"标准库 ( Standard Library )"，包含功能、使用方式，保证代码规范和可移植</samp>

<samp>不同功能定义在不同的文件，称为"头文件 ( Head File )"，如果是系统自带的功能，一定会包含描述该功能的头文件，后缀为 `.h`</samp>

> [!Note]
>
> <samp>头文件的语句不需要以分号结尾</samp>

## <samp>变量</samp>

<samp>变量 (variable) 内存区域的命名存储，变量名就是内存区域的引用</samp>

规范

- 只能由字母 ( 包括大写和小写 )、数字和下划线 ( `_` ) 组成

- 不能以数字开头

- 长度不能超过 63 个字符

- 区分大小写

- 不能使用保留字

  ::: details

  `auto`, `break`, `case`, `char`, `const`, `continue`, `default`, `do`, `double`, `else`, `enum`, `extern`, `float`, `for`, `goto`, `if`, `inline`, `int`, `long`, `register`, `restrict`, `return`, `short`, `signed`, `sizeof`, `static`, `struct`, `switch`, `typedef`, `union`, `unsigned`, `void`, `volatile`, `while`

  :::

  > <samp>两个下划线开头的变量名，以及一个下划线 + 大写英文字母开头的变量名，都是系统保留的</samp>

### <samp>变量声明</samp>

- <samp>变量，必须先声明后使用</samp>

- <samp>变量都有自己的类型 ( type )，如果几个变量具有相同类型，可以在同一行声明</samp>

- <samp>声明变量的语句必须以分号结尾</samp>
- <samp>声明后，变量的类型就不能在运行时修改</samp>

### <samp>赋值</samp>

<samp>先声明后赋值</samp>

```c
// 声明
int num;
// 赋值
num = 42;
```

<samp>声明并赋值</samp>

```c
int a = 43;
```

<samp>相同类型赋值写在同一行</samp>

```c
int x = 1, y = 2;
```

<samp>多重赋值</samp>

```c
int x, y, z, m, n;
x = y = z = m = n = 3;
```

<samp>左值 (left value)：赋值运算符左边的值，一般是变量</samp>

<samp>右值 (right value)：赋值运算符右边的值，一般是具体值</samp>

### <samp>作用域</samp>

<samp>作用域 ( scope ) 指的是变量生效的范围，分为文件作用域 ( file scope ) 和 块级作用域 ( block scope )</samp>

- <samp>文件作用域 ( file scope )：在源码文件顶层声明的变量，从声明位置到文件结束都生效</samp>

  ```c
  int x = 1;
  
  int main(void) {
    printf("%i\n", x);
  }
  ```

- <samp>块级作用域 ( block scope )：在大括号 (`{}`) 内声明的变量，只在当前代码块有效</samp>

  ```c
  #include <stdio.h>
  
  int a = 12;
  
  int main(void) {
    if (a == 12) {
      int b = 99;
      printf("%d", b);
    }
    printf("%d", b); // [!code error]error: 'b' undeclared (first use in this function)
  }
  ```

  

<samp>作用域链：代码块可以嵌套，就会形成作用域链，内层代码可以使用外层的代码，外层不能使用内层的代码；如果内层变量和外层同名，就会在当前作用域中覆盖外层的</samp>

```c
{
  int i = 10;
  {
    int i = 20;
    printf("%d\n", i); // 20
  }
  printf("%d\n", i); // 10
}
```

<samp>最常见的块级作用域是函数作用域，函数内部声明的变量，函数外部不可用；`for` 循环也是一个块级作用域</samp>

```c
for (int i = 0; i < 10; i++) {
  printf("%d\n", i);
}
```

## <samp>运算符</samp>

### <samp>算术运算符</samp>

- <samp>`+`：加</samp>

  <samp>一元运算符：表示取正</samp>

  <samp>二元运算符：表示加法</samp>

- <samp>`-`：减</samp>

  <samp>一元运算符：表示取负</samp>

  <samp>二元运算符：表示减法</samp>

- <samp>`*`：乘</samp>

- <samp>`/`：除</samp>

  > [!TIP]
  >
  > <samp>两个整数相除，得到还是一个整数</samp>
  >
  > ```c
  > float x = 6 / 4;
  > printf("%f\n", x); // 输出 1.000000
  > ```
  >
  > <samp>C 语言里面的整数除法是整除，只会返回整数部分，丢弃小数部分</samp>
  >
  > ```c
  > int score = 5;
  > score = (score / 20) * 100; // 0
  > 
  > score = (score / 20.0) * 100; // 20 改成 20.0, 输出 25
  > ```

- <samp>`%`：余。求模运算。只能用于整数，不能用于浮点数</samp>

  > [!NOTE]
  >
  > 负数求模：结果的符号由第一个运算数的符号决定
  >
  > ```c
  > 11 % -5 // 1
  > -11 % -5 // -1
  > -11 % 5 // -1

### <samp>赋值运算符</samp>

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`

### <samp>自增, 自减运算符</samp>

<samp>对变量自身进行 `+ 1` 和 `- 1`</samp>

- <samp>`++`：自增运算符</samp>
- <samp>`--`：自减运算符</samp>

<samp>前：`++var` 和 `--var` 表示先自增/自减再返回值</samp>

<samp>后：`var++` 和 `var--` 表示先返回值再自增/自减</samp>

::: code-group

```c
int i = 42;
int j;

j = (i++ + 10);
// i: 43
// j: 52

j = (++i + 10)
// i: 44
// j: 54
```

```c
// 分离, 消除隐患
/* 写法一 */
j = (i + 10);
i++;

/* 写法二 */
i++;
j = (i + 10);
```

:::

### <samp>关系运算符</samp>

<samp>"关系运算符 ( relational operator )"：用于比较表达式 (也称"关系表达式relational expression")</samp>

- <samp>`>` 大于</samp>
- <samp>`<` 小于</samp>
- <samp>`>=` 大于等于</samp>
- <samp>`<=` 小于等于</samp>
- <samp>`==` 相等</samp>
- <samp>`!=` 不相等</samp>

> [!NOTE]
>
> <samp>多个运算符不要连用</samp>
>
> ```c
> // 不能保证j在i与k之间
> i < j < k;
> 
> // i<j会返回0或1, 再用0或1和k比较
> (i < j) < k;
> 
> // 判断j在i与k之间
> i < j && j < k;
> ```
