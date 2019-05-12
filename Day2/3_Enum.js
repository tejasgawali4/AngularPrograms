var Mode;
(function (Mode) {
    Mode["Read"] = "Read";
    Mode["Write"] = "Write";
    Mode["ReadWrite"] = "Read Write";
})(Mode || (Mode = {}));
function Open(mode) {
    console.log("File opened in \"" + mode + "\" mode");
}
Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);
