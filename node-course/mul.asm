.model smalll
.stack 100h
.data
.code
.startup
mov dx,05h
mov ax,05h
mul dx
hlt
int 21
.exit
end