class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    changeFirstOutput(output){
        this.outputFirst.innerText = output;
    }
    changeSecondOutput(output){
        this.outputSecond.innerText = output;
    }

    showResult(result){
        this.outputResult.value = result;
    }
}









