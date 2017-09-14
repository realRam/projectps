module MyMod where
import Prelude
import Math

x1=150.0
y1=150.0
x2=350.0
y2=350.0
centre=250.0
angle::Number->Number
angle val = (val*pi)/ ( 180.0)

rotateA::Number->Number
rotateA a = (((x1-centre)*cos(a)-(y1-centre)*sin(a))+centre) --x1 y1 xx1
rotateB::Number->Number
rotateB b = (((y1-centre)*cos(b) + (x1-centre)*sin(b))+centre)
rotateC::Number->Number
rotateC c = (((x2-centre)*cos(c) - (y2-centre)*sin(c))+centre)
rotateD::Number->Number
rotateD d = (((y2-centre)*cos(d) + (x2-centre)*sin(d))+centre)
rotateE::Number->Number
rotateE e = (((x2-centre)*cos(e) - (y1-centre)*sin(e))+centre)
rotateF::Number->Number
rotateF f = (((y1-centre)*cos(f) + (x2-centre)*sin(f))+centre)
rotateG::Number->Number
rotateG g = (((x1-centre)*cos(g) - (y2-centre)*sin(g))+centre)
rotateH::Number->Number
rotateH h = (((y2-centre)*cos(h) + (x1-centre)*sin(h))+centre)
