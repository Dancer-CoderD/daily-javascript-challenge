/**
 *
 * 什么是元编程？
 *
 * 元编程，又译为超编程，是指某类计算机程序的编写。
 * 这类计算机程序编写或操纵其他程序作为它们的数据，或者在运行时完成部分本应该在编译时完成的工作。
 *
 */
// #!/bin/bash
// # metaprogram
// echo "#!/bin/bash" > program
// for((I=1; I<=1024;I++)) do
//     echo "echo $I" >> program
// done
// chmod +x program

/**
 *
 * 这段程序每执行一次，能帮我们生成一个名为 program 的文件，文件内容为1024行 echo 。
 *
 * 元编程优点：
 * - 与手工编写代码相比，程序员可以获得更高的工作效率；
 * - 赋予程序更大的灵活度去处理新的情形而无需重新编译。
 *
 */

// Proxy 亦是如此，用于创建一个对象的代理，从而实现基本操作的拦截和自定义。