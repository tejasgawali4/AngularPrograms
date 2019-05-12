// function Open(mode: string) {
//     console.log(`File opened in "${mode}" mode`);
// }

// Open("Read");
// Open("Write");
// Open("ReadWrite");
// Open("Manish");

// enum Mode { Read = 1, Write, ReadWrite }

enum Mode { Read = "Read", Write = "Write", ReadWrite = "Read Write" }

function Open(mode: Mode) {
    console.log(`File opened in "${mode}" mode`);
}

Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);
